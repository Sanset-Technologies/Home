(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === 'childList')
        for (const o of i.addedNodes)
          o.tagName === 'LINK' && o.rel === 'modulepreload' && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : l.crossOrigin === 'anonymous'
        ? (i.credentials = 'omit')
        : (i.credentials = 'same-origin'),
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
function dc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var Qu = { exports: {} },
  tl = {},
  Yu = { exports: {} },
  z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zn = Symbol.for('react.element'),
  pc = Symbol.for('react.portal'),
  mc = Symbol.for('react.fragment'),
  hc = Symbol.for('react.strict_mode'),
  vc = Symbol.for('react.profiler'),
  yc = Symbol.for('react.provider'),
  gc = Symbol.for('react.context'),
  wc = Symbol.for('react.forward_ref'),
  xc = Symbol.for('react.suspense'),
  kc = Symbol.for('react.memo'),
  Sc = Symbol.for('react.lazy'),
  Do = Symbol.iterator;
function Cc(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Do && e[Do]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Ku = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Xu = Object.assign,
  Zu = {};
function on(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Zu),
    (this.updater = n || Ku);
}
on.prototype.isReactComponent = {};
on.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
on.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Gu() {}
Gu.prototype = on.prototype;
function Vi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Zu),
    (this.updater = n || Ku);
}
var Hi = (Vi.prototype = new Gu());
Hi.constructor = Vi;
Xu(Hi, on.prototype);
Hi.isPureReactComponent = !0;
var Fo = Array.isArray,
  Ju = Object.prototype.hasOwnProperty,
  Ui = { current: null },
  qu = { key: !0, ref: !0, __self: !0, __source: !0 };
function bu(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = '' + t.key),
    t))
      Ju.call(t, r) && !qu.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: Zn,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Ui.current,
  };
}
function Ec(e, t) {
  return {
    $$typeof: Zn,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function $i(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Zn;
}
function Nc(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Io = /\/+/g;
function xl(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? Nc('' + e.key)
    : t.toString(36);
}
function wr(e, t, n, r, l) {
  var i = typeof e;
  (i === 'undefined' || i === 'boolean') && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case 'string':
      case 'number':
        o = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case Zn:
          case pc:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === '' ? '.' + xl(o, 0) : r),
      Fo(l)
        ? ((n = ''),
          e != null && (n = e.replace(Io, '$&/') + '/'),
          wr(l, t, n, '', function (c) {
            return c;
          }))
        : l != null &&
          ($i(l) &&
            (l = Ec(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ''
                  : ('' + l.key).replace(Io, '$&/') + '/') +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === '' ? '.' : r + ':'), Fo(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + xl(i, u);
      o += wr(i, t, n, s, l);
    }
  else if (((s = Cc(e)), typeof s == 'function'))
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + xl(i, u++)), (o += wr(i, t, n, s, l));
  else if (i === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return o;
}
function nr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    wr(e, r, '', '', function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function _c(e) {
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
var ue = { current: null },
  xr = { transition: null },
  jc = {
    ReactCurrentDispatcher: ue,
    ReactCurrentBatchConfig: xr,
    ReactCurrentOwner: Ui,
  };
function es() {
  throw Error('act(...) is not supported in production builds of React.');
}
z.Children = {
  map: nr,
  forEach: function (e, t, n) {
    nr(
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
      nr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      nr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!$i(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
z.Component = on;
z.Fragment = mc;
z.Profiler = vc;
z.PureComponent = Vi;
z.StrictMode = hc;
z.Suspense = xc;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jc;
z.act = es;
z.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = Xu({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = Ui.current)),
      t.key !== void 0 && (l = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      Ju.call(t, s) &&
        !qu.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: Zn, type: e.type, key: l, ref: i, props: r, _owner: o };
};
z.createContext = function (e) {
  return (
    (e = {
      $$typeof: gc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: yc, _context: e }),
    (e.Consumer = e)
  );
};
z.createElement = bu;
z.createFactory = function (e) {
  var t = bu.bind(null, e);
  return (t.type = e), t;
};
z.createRef = function () {
  return { current: null };
};
z.forwardRef = function (e) {
  return { $$typeof: wc, render: e };
};
z.isValidElement = $i;
z.lazy = function (e) {
  return { $$typeof: Sc, _payload: { _status: -1, _result: e }, _init: _c };
};
z.memo = function (e, t) {
  return { $$typeof: kc, type: e, compare: t === void 0 ? null : t };
};
z.startTransition = function (e) {
  var t = xr.transition;
  xr.transition = {};
  try {
    e();
  } finally {
    xr.transition = t;
  }
};
z.unstable_act = es;
z.useCallback = function (e, t) {
  return ue.current.useCallback(e, t);
};
z.useContext = function (e) {
  return ue.current.useContext(e);
};
z.useDebugValue = function () {};
z.useDeferredValue = function (e) {
  return ue.current.useDeferredValue(e);
};
z.useEffect = function (e, t) {
  return ue.current.useEffect(e, t);
};
z.useId = function () {
  return ue.current.useId();
};
z.useImperativeHandle = function (e, t, n) {
  return ue.current.useImperativeHandle(e, t, n);
};
z.useInsertionEffect = function (e, t) {
  return ue.current.useInsertionEffect(e, t);
};
z.useLayoutEffect = function (e, t) {
  return ue.current.useLayoutEffect(e, t);
};
z.useMemo = function (e, t) {
  return ue.current.useMemo(e, t);
};
z.useReducer = function (e, t, n) {
  return ue.current.useReducer(e, t, n);
};
z.useRef = function (e) {
  return ue.current.useRef(e);
};
z.useState = function (e) {
  return ue.current.useState(e);
};
z.useSyncExternalStore = function (e, t, n) {
  return ue.current.useSyncExternalStore(e, t, n);
};
z.useTransition = function () {
  return ue.current.useTransition();
};
z.version = '18.3.1';
Yu.exports = z;
var wt = Yu.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pc = wt,
  Lc = Symbol.for('react.element'),
  zc = Symbol.for('react.fragment'),
  Tc = Object.prototype.hasOwnProperty,
  Mc = Pc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Rc = { key: !0, ref: !0, __self: !0, __source: !0 };
function ts(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = '' + n),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) Tc.call(t, r) && !Rc.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Lc,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Mc.current,
  };
}
tl.Fragment = zc;
tl.jsx = ts;
tl.jsxs = ts;
Qu.exports = tl;
var p = Qu.exports,
  ns = { exports: {} },
  ge = {},
  rs = { exports: {} },
  ls = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(E, P) {
    var L = E.length;
    E.push(P);
    e: for (; 0 < L; ) {
      var B = (L - 1) >>> 1,
        Z = E[B];
      if (0 < l(Z, P)) (E[B] = P), (E[L] = Z), (L = B);
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var P = E[0],
      L = E.pop();
    if (L !== P) {
      E[0] = L;
      e: for (var B = 0, Z = E.length, er = Z >>> 1; B < er; ) {
        var ht = 2 * (B + 1) - 1,
          wl = E[ht],
          vt = ht + 1,
          tr = E[vt];
        if (0 > l(wl, L))
          vt < Z && 0 > l(tr, wl)
            ? ((E[B] = tr), (E[vt] = L), (B = vt))
            : ((E[B] = wl), (E[ht] = L), (B = ht));
        else if (vt < Z && 0 > l(tr, L)) (E[B] = tr), (E[vt] = L), (B = vt);
        else break e;
      }
    }
    return P;
  }
  function l(E, P) {
    var L = E.sortIndex - P.sortIndex;
    return L !== 0 ? L : E.id - P.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var s = [],
    c = [],
    v = 1,
    h = null,
    m = 3,
    w = !1,
    x = !1,
    k = !1,
    I = typeof setTimeout == 'function' ? setTimeout : null,
    f = typeof clearTimeout == 'function' ? clearTimeout : null,
    a = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(E) {
    for (var P = n(c); P !== null; ) {
      if (P.callback === null) r(c);
      else if (P.startTime <= E)
        r(c), (P.sortIndex = P.expirationTime), t(s, P);
      else break;
      P = n(c);
    }
  }
  function y(E) {
    if (((k = !1), d(E), !x))
      if (n(s) !== null) (x = !0), yl(C);
      else {
        var P = n(c);
        P !== null && gl(y, P.startTime - E);
      }
  }
  function C(E, P) {
    (x = !1), k && ((k = !1), f(j), (j = -1)), (w = !0);
    var L = m;
    try {
      for (
        d(P), h = n(s);
        h !== null && (!(h.expirationTime > P) || (E && !_e()));

      ) {
        var B = h.callback;
        if (typeof B == 'function') {
          (h.callback = null), (m = h.priorityLevel);
          var Z = B(h.expirationTime <= P);
          (P = e.unstable_now()),
            typeof Z == 'function' ? (h.callback = Z) : h === n(s) && r(s),
            d(P);
        } else r(s);
        h = n(s);
      }
      if (h !== null) var er = !0;
      else {
        var ht = n(c);
        ht !== null && gl(y, ht.startTime - P), (er = !1);
      }
      return er;
    } finally {
      (h = null), (m = L), (w = !1);
    }
  }
  var N = !1,
    _ = null,
    j = -1,
    W = 5,
    T = -1;
  function _e() {
    return !(e.unstable_now() - T < W);
  }
  function an() {
    if (_ !== null) {
      var E = e.unstable_now();
      T = E;
      var P = !0;
      try {
        P = _(!0, E);
      } finally {
        P ? cn() : ((N = !1), (_ = null));
      }
    } else N = !1;
  }
  var cn;
  if (typeof a == 'function')
    cn = function () {
      a(an);
    };
  else if (typeof MessageChannel < 'u') {
    var Oo = new MessageChannel(),
      fc = Oo.port2;
    (Oo.port1.onmessage = an),
      (cn = function () {
        fc.postMessage(null);
      });
  } else
    cn = function () {
      I(an, 0);
    };
  function yl(E) {
    (_ = E), N || ((N = !0), cn());
  }
  function gl(E, P) {
    j = I(function () {
      E(e.unstable_now());
    }, P);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || w || ((x = !0), yl(C));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (W = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (E) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var P = 3;
          break;
        default:
          P = m;
      }
      var L = m;
      m = P;
      try {
        return E();
      } finally {
        m = L;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, P) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var L = m;
      m = E;
      try {
        return P();
      } finally {
        m = L;
      }
    }),
    (e.unstable_scheduleCallback = function (E, P, L) {
      var B = e.unstable_now();
      switch (
        (typeof L == 'object' && L !== null
          ? ((L = L.delay), (L = typeof L == 'number' && 0 < L ? B + L : B))
          : (L = B),
        E)
      ) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return (
        (Z = L + Z),
        (E = {
          id: v++,
          callback: P,
          priorityLevel: E,
          startTime: L,
          expirationTime: Z,
          sortIndex: -1,
        }),
        L > B
          ? ((E.sortIndex = L),
            t(c, E),
            n(s) === null &&
              E === n(c) &&
              (k ? (f(j), (j = -1)) : (k = !0), gl(y, L - B)))
          : ((E.sortIndex = Z), t(s, E), x || w || ((x = !0), yl(C))),
        E
      );
    }),
    (e.unstable_shouldYield = _e),
    (e.unstable_wrapCallback = function (E) {
      var P = m;
      return function () {
        var L = m;
        m = P;
        try {
          return E.apply(this, arguments);
        } finally {
          m = L;
        }
      };
    });
})(ls);
rs.exports = ls;
var Oc = rs.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dc = wt,
  ye = Oc;
function g(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var is = new Set(),
  Mn = {};
function zt(e, t) {
  qt(e, t), qt(e + 'Capture', t);
}
function qt(e, t) {
  for (Mn[e] = t, e = 0; e < t.length; e++) is.add(t[e]);
}
var Be = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Yl = Object.prototype.hasOwnProperty,
  Fc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Vo = {},
  Ho = {};
function Ic(e) {
  return Yl.call(Ho, e)
    ? !0
    : Yl.call(Vo, e)
    ? !1
    : Fc.test(e)
    ? (Ho[e] = !0)
    : ((Vo[e] = !0), !1);
}
function Vc(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function Hc(e, t, n, r) {
  if (t === null || typeof t > 'u' || Vc(e, t, n, r)) return !0;
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
function se(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var ee = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    ee[e] = new se(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  ee[t] = new se(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  ee[e] = new se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  ee[e] = new se(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    ee[e] = new se(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  ee[e] = new se(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  ee[e] = new se(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  ee[e] = new se(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  ee[e] = new se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ai = /[\-:]([a-z])/g;
function Wi(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Ai, Wi);
    ee[t] = new se(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Ai, Wi);
    ee[t] = new se(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Ai, Wi);
  ee[t] = new se(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ee.xlinkHref = new se(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Bi(e, t, n, r) {
  var l = ee.hasOwnProperty(t) ? ee[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (Hc(t, n, l, r) && (n = null),
    r || l === null
      ? Ic(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : '') : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Xe = Dc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  rr = Symbol.for('react.element'),
  Rt = Symbol.for('react.portal'),
  Ot = Symbol.for('react.fragment'),
  Qi = Symbol.for('react.strict_mode'),
  Kl = Symbol.for('react.profiler'),
  os = Symbol.for('react.provider'),
  us = Symbol.for('react.context'),
  Yi = Symbol.for('react.forward_ref'),
  Xl = Symbol.for('react.suspense'),
  Zl = Symbol.for('react.suspense_list'),
  Ki = Symbol.for('react.memo'),
  Ge = Symbol.for('react.lazy'),
  ss = Symbol.for('react.offscreen'),
  Uo = Symbol.iterator;
function fn(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Uo && e[Uo]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var $ = Object.assign,
  kl;
function wn(e) {
  if (kl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      kl = (t && t[1]) || '';
    }
  return (
    `
` +
    kl +
    e
  );
}
var Sl = !1;
function Cl(e, t) {
  if (!e || Sl) return '';
  Sl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == 'string') {
      for (
        var l = c.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var s =
                  `
` + l[o].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    s.includes('<anonymous>') &&
                    (s = s.replace('<anonymous>', e.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (Sl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? wn(e) : '';
}
function Uc(e) {
  switch (e.tag) {
    case 5:
      return wn(e.type);
    case 16:
      return wn('Lazy');
    case 13:
      return wn('Suspense');
    case 19:
      return wn('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Cl(e.type, !1)), e;
    case 11:
      return (e = Cl(e.type.render, !1)), e;
    case 1:
      return (e = Cl(e.type, !0)), e;
    default:
      return '';
  }
}
function Gl(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case Ot:
      return 'Fragment';
    case Rt:
      return 'Portal';
    case Kl:
      return 'Profiler';
    case Qi:
      return 'StrictMode';
    case Xl:
      return 'Suspense';
    case Zl:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case us:
        return (e.displayName || 'Context') + '.Consumer';
      case os:
        return (e._context.displayName || 'Context') + '.Provider';
      case Yi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case Ki:
        return (
          (t = e.displayName || null), t !== null ? t : Gl(e.type) || 'Memo'
        );
      case Ge:
        (t = e._payload), (e = e._init);
        try {
          return Gl(e(t));
        } catch {}
    }
  return null;
}
function $c(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return Gl(t);
    case 8:
      return t === Qi ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function ct(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function as(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function Ac(e) {
  var t = as(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
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
          (r = '' + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = '' + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function lr(e) {
  e._valueTracker || (e._valueTracker = Ac(e));
}
function cs(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = as(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Tr(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Jl(e, t) {
  var n = t.checked;
  return $({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function $o(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = ct(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function fs(e, t) {
  (t = t.checked), t != null && Bi(e, 'checked', t, !1);
}
function ql(e, t) {
  fs(e, t);
  var n = ct(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? bl(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && bl(e, t.type, ct(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ao(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function bl(e, t, n) {
  (t !== 'number' || Tr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var xn = Array.isArray;
function Qt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + ct(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function ei(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(g(91));
  return $({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function Wo(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(g(92));
      if (xn(n)) {
        if (1 < n.length) throw Error(g(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: ct(n) };
}
function ds(e, t) {
  var n = ct(t.value),
    r = ct(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function Bo(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function ps(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function ti(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? ps(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var ir,
  ms = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        ir = ir || document.createElement('div'),
          ir.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = ir.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Rn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Cn = {
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
  Wc = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Cn).forEach(function (e) {
  Wc.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Cn[t] = Cn[e]);
  });
});
function hs(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Cn.hasOwnProperty(e) && Cn[e])
    ? ('' + t).trim()
    : t + 'px';
}
function vs(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        l = hs(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Bc = $(
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
function ni(e, t) {
  if (t) {
    if (Bc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(g(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(g(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(g(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(g(62));
  }
}
function ri(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var li = null;
function Xi(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ii = null,
  Yt = null,
  Kt = null;
function Qo(e) {
  if ((e = qn(e))) {
    if (typeof ii != 'function') throw Error(g(280));
    var t = e.stateNode;
    t && ((t = ol(t)), ii(e.stateNode, e.type, t));
  }
}
function ys(e) {
  Yt ? (Kt ? Kt.push(e) : (Kt = [e])) : (Yt = e);
}
function gs() {
  if (Yt) {
    var e = Yt,
      t = Kt;
    if (((Kt = Yt = null), Qo(e), t)) for (e = 0; e < t.length; e++) Qo(t[e]);
  }
}
function ws(e, t) {
  return e(t);
}
function xs() {}
var El = !1;
function ks(e, t, n) {
  if (El) return e(t, n);
  El = !0;
  try {
    return ws(e, t, n);
  } finally {
    (El = !1), (Yt !== null || Kt !== null) && (xs(), gs());
  }
}
function On(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ol(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(g(231, t, typeof n));
  return n;
}
var oi = !1;
if (Be)
  try {
    var dn = {};
    Object.defineProperty(dn, 'passive', {
      get: function () {
        oi = !0;
      },
    }),
      window.addEventListener('test', dn, dn),
      window.removeEventListener('test', dn, dn);
  } catch {
    oi = !1;
  }
function Qc(e, t, n, r, l, i, o, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (v) {
    this.onError(v);
  }
}
var En = !1,
  Mr = null,
  Rr = !1,
  ui = null,
  Yc = {
    onError: function (e) {
      (En = !0), (Mr = e);
    },
  };
function Kc(e, t, n, r, l, i, o, u, s) {
  (En = !1), (Mr = null), Qc.apply(Yc, arguments);
}
function Xc(e, t, n, r, l, i, o, u, s) {
  if ((Kc.apply(this, arguments), En)) {
    if (En) {
      var c = Mr;
      (En = !1), (Mr = null);
    } else throw Error(g(198));
    Rr || ((Rr = !0), (ui = c));
  }
}
function Tt(e) {
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
function Ss(e) {
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
function Yo(e) {
  if (Tt(e) !== e) throw Error(g(188));
}
function Zc(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Tt(e)), t === null)) throw Error(g(188));
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
        if (i === n) return Yo(l), e;
        if (i === r) return Yo(l), t;
        i = i.sibling;
      }
      throw Error(g(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (u === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (u === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(g(189));
      }
    }
    if (n.alternate !== r) throw Error(g(190));
  }
  if (n.tag !== 3) throw Error(g(188));
  return n.stateNode.current === n ? e : t;
}
function Cs(e) {
  return (e = Zc(e)), e !== null ? Es(e) : null;
}
function Es(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Es(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ns = ye.unstable_scheduleCallback,
  Ko = ye.unstable_cancelCallback,
  Gc = ye.unstable_shouldYield,
  Jc = ye.unstable_requestPaint,
  Q = ye.unstable_now,
  qc = ye.unstable_getCurrentPriorityLevel,
  Zi = ye.unstable_ImmediatePriority,
  _s = ye.unstable_UserBlockingPriority,
  Or = ye.unstable_NormalPriority,
  bc = ye.unstable_LowPriority,
  js = ye.unstable_IdlePriority,
  nl = null,
  Ie = null;
function ef(e) {
  if (Ie && typeof Ie.onCommitFiberRoot == 'function')
    try {
      Ie.onCommitFiberRoot(nl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Te = Math.clz32 ? Math.clz32 : rf,
  tf = Math.log,
  nf = Math.LN2;
function rf(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((tf(e) / nf) | 0)) | 0;
}
var or = 64,
  ur = 4194304;
function kn(e) {
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
function Dr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = kn(u)) : ((i &= o), i !== 0 && (r = kn(i)));
  } else (o = n & ~l), o !== 0 ? (r = kn(o)) : i !== 0 && (r = kn(i));
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
      (n = 31 - Te(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function lf(e, t) {
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
function of(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - Te(i),
      u = 1 << o,
      s = l[o];
    s === -1
      ? (!(u & n) || u & r) && (l[o] = lf(u, t))
      : s <= t && (e.expiredLanes |= u),
      (i &= ~u);
  }
}
function si(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ps() {
  var e = or;
  return (or <<= 1), !(or & 4194240) && (or = 64), e;
}
function Nl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Gn(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Te(t)),
    (e[t] = n);
}
function uf(e, t) {
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
    var l = 31 - Te(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function Gi(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Te(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var R = 0;
function Ls(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var zs,
  Ji,
  Ts,
  Ms,
  Rs,
  ai = !1,
  sr = [],
  nt = null,
  rt = null,
  lt = null,
  Dn = new Map(),
  Fn = new Map(),
  qe = [],
  sf =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function Xo(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      nt = null;
      break;
    case 'dragenter':
    case 'dragleave':
      rt = null;
      break;
    case 'mouseover':
    case 'mouseout':
      lt = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Dn.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Fn.delete(t.pointerId);
  }
}
function pn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = qn(t)), t !== null && Ji(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function af(e, t, n, r, l) {
  switch (t) {
    case 'focusin':
      return (nt = pn(nt, e, t, n, r, l)), !0;
    case 'dragenter':
      return (rt = pn(rt, e, t, n, r, l)), !0;
    case 'mouseover':
      return (lt = pn(lt, e, t, n, r, l)), !0;
    case 'pointerover':
      var i = l.pointerId;
      return Dn.set(i, pn(Dn.get(i) || null, e, t, n, r, l)), !0;
    case 'gotpointercapture':
      return (
        (i = l.pointerId), Fn.set(i, pn(Fn.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Os(e) {
  var t = xt(e.target);
  if (t !== null) {
    var n = Tt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ss(n)), t !== null)) {
          (e.blockedOn = t),
            Rs(e.priority, function () {
              Ts(n);
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
function kr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ci(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (li = r), n.target.dispatchEvent(r), (li = null);
    } else return (t = qn(n)), t !== null && Ji(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Zo(e, t, n) {
  kr(e) && n.delete(t);
}
function cf() {
  (ai = !1),
    nt !== null && kr(nt) && (nt = null),
    rt !== null && kr(rt) && (rt = null),
    lt !== null && kr(lt) && (lt = null),
    Dn.forEach(Zo),
    Fn.forEach(Zo);
}
function mn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ai ||
      ((ai = !0),
      ye.unstable_scheduleCallback(ye.unstable_NormalPriority, cf)));
}
function In(e) {
  function t(l) {
    return mn(l, e);
  }
  if (0 < sr.length) {
    mn(sr[0], e);
    for (var n = 1; n < sr.length; n++) {
      var r = sr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    nt !== null && mn(nt, e),
      rt !== null && mn(rt, e),
      lt !== null && mn(lt, e),
      Dn.forEach(t),
      Fn.forEach(t),
      n = 0;
    n < qe.length;
    n++
  )
    (r = qe[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < qe.length && ((n = qe[0]), n.blockedOn === null); )
    Os(n), n.blockedOn === null && qe.shift();
}
var Xt = Xe.ReactCurrentBatchConfig,
  Fr = !0;
function ff(e, t, n, r) {
  var l = R,
    i = Xt.transition;
  Xt.transition = null;
  try {
    (R = 1), qi(e, t, n, r);
  } finally {
    (R = l), (Xt.transition = i);
  }
}
function df(e, t, n, r) {
  var l = R,
    i = Xt.transition;
  Xt.transition = null;
  try {
    (R = 4), qi(e, t, n, r);
  } finally {
    (R = l), (Xt.transition = i);
  }
}
function qi(e, t, n, r) {
  if (Fr) {
    var l = ci(e, t, n, r);
    if (l === null) Dl(e, t, r, Ir, n), Xo(e, r);
    else if (af(l, e, t, n, r)) r.stopPropagation();
    else if ((Xo(e, r), t & 4 && -1 < sf.indexOf(e))) {
      for (; l !== null; ) {
        var i = qn(l);
        if (
          (i !== null && zs(i),
          (i = ci(e, t, n, r)),
          i === null && Dl(e, t, r, Ir, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Dl(e, t, r, null, n);
  }
}
var Ir = null;
function ci(e, t, n, r) {
  if (((Ir = null), (e = Xi(r)), (e = xt(e)), e !== null))
    if (((t = Tt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ss(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ir = e), null;
}
function Ds(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (qc()) {
        case Zi:
          return 1;
        case _s:
          return 4;
        case Or:
        case bc:
          return 16;
        case js:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var et = null,
  bi = null,
  Sr = null;
function Fs() {
  if (Sr) return Sr;
  var e,
    t = bi,
    n = t.length,
    r,
    l = 'value' in et ? et.value : et.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (Sr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Cr(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ar() {
  return !0;
}
function Go() {
  return !1;
}
function we(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? ar
        : Go),
      (this.isPropagationStopped = Go),
      this
    );
  }
  return (
    $(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = ar));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = ar));
      },
      persist: function () {},
      isPersistent: ar,
    }),
    t
  );
}
var un = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  eo = we(un),
  Jn = $({}, un, { view: 0, detail: 0 }),
  pf = we(Jn),
  _l,
  jl,
  hn,
  rl = $({}, Jn, {
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
    getModifierState: to,
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
      return 'movementX' in e
        ? e.movementX
        : (e !== hn &&
            (hn && e.type === 'mousemove'
              ? ((_l = e.screenX - hn.screenX), (jl = e.screenY - hn.screenY))
              : (jl = _l = 0),
            (hn = e)),
          _l);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : jl;
    },
  }),
  Jo = we(rl),
  mf = $({}, rl, { dataTransfer: 0 }),
  hf = we(mf),
  vf = $({}, Jn, { relatedTarget: 0 }),
  Pl = we(vf),
  yf = $({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  gf = we(yf),
  wf = $({}, un, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  xf = we(wf),
  kf = $({}, un, { data: 0 }),
  qo = we(kf),
  Sf = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  Cf = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  Ef = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function Nf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Ef[e]) ? !!t[e] : !1;
}
function to() {
  return Nf;
}
var _f = $({}, Jn, {
    key: function (e) {
      if (e.key) {
        var t = Sf[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Cr(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? Cf[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: to,
    charCode: function (e) {
      return e.type === 'keypress' ? Cr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Cr(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  jf = we(_f),
  Pf = $({}, rl, {
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
  bo = we(Pf),
  Lf = $({}, Jn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: to,
  }),
  zf = we(Lf),
  Tf = $({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Mf = we(Tf),
  Rf = $({}, rl, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Of = we(Rf),
  Df = [9, 13, 27, 32],
  no = Be && 'CompositionEvent' in window,
  Nn = null;
Be && 'documentMode' in document && (Nn = document.documentMode);
var Ff = Be && 'TextEvent' in window && !Nn,
  Is = Be && (!no || (Nn && 8 < Nn && 11 >= Nn)),
  eu = ' ',
  tu = !1;
function Vs(e, t) {
  switch (e) {
    case 'keyup':
      return Df.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function Hs(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var Dt = !1;
function If(e, t) {
  switch (e) {
    case 'compositionend':
      return Hs(t);
    case 'keypress':
      return t.which !== 32 ? null : ((tu = !0), eu);
    case 'textInput':
      return (e = t.data), e === eu && tu ? null : e;
    default:
      return null;
  }
}
function Vf(e, t) {
  if (Dt)
    return e === 'compositionend' || (!no && Vs(e, t))
      ? ((e = Fs()), (Sr = bi = et = null), (Dt = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return Is && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var Hf = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
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
function nu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!Hf[e.type] : t === 'textarea';
}
function Us(e, t, n, r) {
  ys(r),
    (t = Vr(t, 'onChange')),
    0 < t.length &&
      ((n = new eo('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var _n = null,
  Vn = null;
function Uf(e) {
  Js(e, 0);
}
function ll(e) {
  var t = Vt(e);
  if (cs(t)) return e;
}
function $f(e, t) {
  if (e === 'change') return t;
}
var $s = !1;
if (Be) {
  var Ll;
  if (Be) {
    var zl = 'oninput' in document;
    if (!zl) {
      var ru = document.createElement('div');
      ru.setAttribute('oninput', 'return;'),
        (zl = typeof ru.oninput == 'function');
    }
    Ll = zl;
  } else Ll = !1;
  $s = Ll && (!document.documentMode || 9 < document.documentMode);
}
function lu() {
  _n && (_n.detachEvent('onpropertychange', As), (Vn = _n = null));
}
function As(e) {
  if (e.propertyName === 'value' && ll(Vn)) {
    var t = [];
    Us(t, Vn, e, Xi(e)), ks(Uf, t);
  }
}
function Af(e, t, n) {
  e === 'focusin'
    ? (lu(), (_n = t), (Vn = n), _n.attachEvent('onpropertychange', As))
    : e === 'focusout' && lu();
}
function Wf(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return ll(Vn);
}
function Bf(e, t) {
  if (e === 'click') return ll(t);
}
function Qf(e, t) {
  if (e === 'input' || e === 'change') return ll(t);
}
function Yf(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Re = typeof Object.is == 'function' ? Object.is : Yf;
function Hn(e, t) {
  if (Re(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Yl.call(t, l) || !Re(e[l], t[l])) return !1;
  }
  return !0;
}
function iu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ou(e, t) {
  var n = iu(e);
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
    n = iu(n);
  }
}
function Ws(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Ws(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Bs() {
  for (var e = window, t = Tr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Tr(e.document);
  }
  return t;
}
function ro(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function Kf(e) {
  var t = Bs(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Ws(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ro(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
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
          (l = ou(n, i));
        var o = ou(n, r);
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
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Xf = Be && 'documentMode' in document && 11 >= document.documentMode,
  Ft = null,
  fi = null,
  jn = null,
  di = !1;
function uu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  di ||
    Ft == null ||
    Ft !== Tr(r) ||
    ((r = Ft),
    'selectionStart' in r && ro(r)
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
    (jn && Hn(jn, r)) ||
      ((jn = r),
      (r = Vr(fi, 'onSelect')),
      0 < r.length &&
        ((t = new eo('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Ft))));
}
function cr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var It = {
    animationend: cr('Animation', 'AnimationEnd'),
    animationiteration: cr('Animation', 'AnimationIteration'),
    animationstart: cr('Animation', 'AnimationStart'),
    transitionend: cr('Transition', 'TransitionEnd'),
  },
  Tl = {},
  Qs = {};
Be &&
  ((Qs = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete It.animationend.animation,
    delete It.animationiteration.animation,
    delete It.animationstart.animation),
  'TransitionEvent' in window || delete It.transitionend.transition);
function il(e) {
  if (Tl[e]) return Tl[e];
  if (!It[e]) return e;
  var t = It[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Qs) return (Tl[e] = t[n]);
  return e;
}
var Ys = il('animationend'),
  Ks = il('animationiteration'),
  Xs = il('animationstart'),
  Zs = il('transitionend'),
  Gs = new Map(),
  su =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function dt(e, t) {
  Gs.set(e, t), zt(t, [e]);
}
for (var Ml = 0; Ml < su.length; Ml++) {
  var Rl = su[Ml],
    Zf = Rl.toLowerCase(),
    Gf = Rl[0].toUpperCase() + Rl.slice(1);
  dt(Zf, 'on' + Gf);
}
dt(Ys, 'onAnimationEnd');
dt(Ks, 'onAnimationIteration');
dt(Xs, 'onAnimationStart');
dt('dblclick', 'onDoubleClick');
dt('focusin', 'onFocus');
dt('focusout', 'onBlur');
dt(Zs, 'onTransitionEnd');
qt('onMouseEnter', ['mouseout', 'mouseover']);
qt('onMouseLeave', ['mouseout', 'mouseover']);
qt('onPointerEnter', ['pointerout', 'pointerover']);
qt('onPointerLeave', ['pointerout', 'pointerover']);
zt(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
zt(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
zt('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
zt(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
zt(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
zt(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var Sn =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  Jf = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Sn));
function au(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), Xc(r, t, void 0, e), (e.currentTarget = null);
}
function Js(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            s = u.instance,
            c = u.currentTarget;
          if (((u = u.listener), s !== i && l.isPropagationStopped())) break e;
          au(l, u, c), (i = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (s = u.instance),
            (c = u.currentTarget),
            (u = u.listener),
            s !== i && l.isPropagationStopped())
          )
            break e;
          au(l, u, c), (i = s);
        }
    }
  }
  if (Rr) throw ((e = ui), (Rr = !1), (ui = null), e);
}
function D(e, t) {
  var n = t[yi];
  n === void 0 && (n = t[yi] = new Set());
  var r = e + '__bubble';
  n.has(r) || (qs(t, e, 2, !1), n.add(r));
}
function Ol(e, t, n) {
  var r = 0;
  t && (r |= 4), qs(n, e, r, t);
}
var fr = '_reactListening' + Math.random().toString(36).slice(2);
function Un(e) {
  if (!e[fr]) {
    (e[fr] = !0),
      is.forEach(function (n) {
        n !== 'selectionchange' && (Jf.has(n) || Ol(n, !1, e), Ol(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[fr] || ((t[fr] = !0), Ol('selectionchange', !1, t));
  }
}
function qs(e, t, n, r) {
  switch (Ds(t)) {
    case 1:
      var l = ff;
      break;
    case 4:
      l = df;
      break;
    default:
      l = qi;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !oi ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Dl(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = xt(u)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  ks(function () {
    var c = i,
      v = Xi(n),
      h = [];
    e: {
      var m = Gs.get(e);
      if (m !== void 0) {
        var w = eo,
          x = e;
        switch (e) {
          case 'keypress':
            if (Cr(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            w = jf;
            break;
          case 'focusin':
            (x = 'focus'), (w = Pl);
            break;
          case 'focusout':
            (x = 'blur'), (w = Pl);
            break;
          case 'beforeblur':
          case 'afterblur':
            w = Pl;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            w = Jo;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            w = hf;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            w = zf;
            break;
          case Ys:
          case Ks:
          case Xs:
            w = gf;
            break;
          case Zs:
            w = Mf;
            break;
          case 'scroll':
            w = pf;
            break;
          case 'wheel':
            w = Of;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            w = xf;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            w = bo;
        }
        var k = (t & 4) !== 0,
          I = !k && e === 'scroll',
          f = k ? (m !== null ? m + 'Capture' : null) : m;
        k = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var y = d.stateNode;
          if (
            (d.tag === 5 &&
              y !== null &&
              ((d = y),
              f !== null && ((y = On(a, f)), y != null && k.push($n(a, y, d)))),
            I)
          )
            break;
          a = a.return;
        }
        0 < k.length &&
          ((m = new w(m, x, null, n, v)), h.push({ event: m, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === 'mouseover' || e === 'pointerover'),
          (w = e === 'mouseout' || e === 'pointerout'),
          m &&
            n !== li &&
            (x = n.relatedTarget || n.fromElement) &&
            (xt(x) || x[Qe]))
        )
          break e;
        if (
          (w || m) &&
          ((m =
            v.window === v
              ? v
              : (m = v.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          w
            ? ((x = n.relatedTarget || n.toElement),
              (w = c),
              (x = x ? xt(x) : null),
              x !== null &&
                ((I = Tt(x)), x !== I || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((w = null), (x = c)),
          w !== x)
        ) {
          if (
            ((k = Jo),
            (y = 'onMouseLeave'),
            (f = 'onMouseEnter'),
            (a = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((k = bo),
              (y = 'onPointerLeave'),
              (f = 'onPointerEnter'),
              (a = 'pointer')),
            (I = w == null ? m : Vt(w)),
            (d = x == null ? m : Vt(x)),
            (m = new k(y, a + 'leave', w, n, v)),
            (m.target = I),
            (m.relatedTarget = d),
            (y = null),
            xt(v) === c &&
              ((k = new k(f, a + 'enter', x, n, v)),
              (k.target = d),
              (k.relatedTarget = I),
              (y = k)),
            (I = y),
            w && x)
          )
            t: {
              for (k = w, f = x, a = 0, d = k; d; d = Mt(d)) a++;
              for (d = 0, y = f; y; y = Mt(y)) d++;
              for (; 0 < a - d; ) (k = Mt(k)), a--;
              for (; 0 < d - a; ) (f = Mt(f)), d--;
              for (; a--; ) {
                if (k === f || (f !== null && k === f.alternate)) break t;
                (k = Mt(k)), (f = Mt(f));
              }
              k = null;
            }
          else k = null;
          w !== null && cu(h, m, w, k, !1),
            x !== null && I !== null && cu(h, I, x, k, !0);
        }
      }
      e: {
        if (
          ((m = c ? Vt(c) : window),
          (w = m.nodeName && m.nodeName.toLowerCase()),
          w === 'select' || (w === 'input' && m.type === 'file'))
        )
          var C = $f;
        else if (nu(m))
          if ($s) C = Qf;
          else {
            C = Wf;
            var N = Af;
          }
        else
          (w = m.nodeName) &&
            w.toLowerCase() === 'input' &&
            (m.type === 'checkbox' || m.type === 'radio') &&
            (C = Bf);
        if (C && (C = C(e, c))) {
          Us(h, C, n, v);
          break e;
        }
        N && N(e, m, c),
          e === 'focusout' &&
            (N = m._wrapperState) &&
            N.controlled &&
            m.type === 'number' &&
            bl(m, 'number', m.value);
      }
      switch (((N = c ? Vt(c) : window), e)) {
        case 'focusin':
          (nu(N) || N.contentEditable === 'true') &&
            ((Ft = N), (fi = c), (jn = null));
          break;
        case 'focusout':
          jn = fi = Ft = null;
          break;
        case 'mousedown':
          di = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (di = !1), uu(h, n, v);
          break;
        case 'selectionchange':
          if (Xf) break;
        case 'keydown':
        case 'keyup':
          uu(h, n, v);
      }
      var _;
      if (no)
        e: {
          switch (e) {
            case 'compositionstart':
              var j = 'onCompositionStart';
              break e;
            case 'compositionend':
              j = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              j = 'onCompositionUpdate';
              break e;
          }
          j = void 0;
        }
      else
        Dt
          ? Vs(e, n) && (j = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (j = 'onCompositionStart');
      j &&
        (Is &&
          n.locale !== 'ko' &&
          (Dt || j !== 'onCompositionStart'
            ? j === 'onCompositionEnd' && Dt && (_ = Fs())
            : ((et = v),
              (bi = 'value' in et ? et.value : et.textContent),
              (Dt = !0))),
        (N = Vr(c, j)),
        0 < N.length &&
          ((j = new qo(j, e, null, n, v)),
          h.push({ event: j, listeners: N }),
          _ ? (j.data = _) : ((_ = Hs(n)), _ !== null && (j.data = _)))),
        (_ = Ff ? If(e, n) : Vf(e, n)) &&
          ((c = Vr(c, 'onBeforeInput')),
          0 < c.length &&
            ((v = new qo('onBeforeInput', 'beforeinput', null, n, v)),
            h.push({ event: v, listeners: c }),
            (v.data = _)));
    }
    Js(h, t);
  });
}
function $n(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Vr(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = On(e, n)),
      i != null && r.unshift($n(e, i, l)),
      (i = On(e, t)),
      i != null && r.push($n(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Mt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function cu(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      c = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      c !== null &&
      ((u = c),
      l
        ? ((s = On(n, i)), s != null && o.unshift($n(n, s, u)))
        : l || ((s = On(n, i)), s != null && o.push($n(n, s, u)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var qf = /\r\n?/g,
  bf = /\u0000|\uFFFD/g;
function fu(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      qf,
      `
`
    )
    .replace(bf, '');
}
function dr(e, t, n) {
  if (((t = fu(t)), fu(e) !== t && n)) throw Error(g(425));
}
function Hr() {}
var pi = null,
  mi = null;
function hi(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var vi = typeof setTimeout == 'function' ? setTimeout : void 0,
  ed = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  du = typeof Promise == 'function' ? Promise : void 0,
  td =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof du < 'u'
      ? function (e) {
          return du.resolve(null).then(e).catch(nd);
        }
      : vi;
function nd(e) {
  setTimeout(function () {
    throw e;
  });
}
function Fl(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(l), In(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = l;
  } while (n);
  In(t);
}
function it(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function pu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var sn = Math.random().toString(36).slice(2),
  Fe = '__reactFiber$' + sn,
  An = '__reactProps$' + sn,
  Qe = '__reactContainer$' + sn,
  yi = '__reactEvents$' + sn,
  rd = '__reactListeners$' + sn,
  ld = '__reactHandles$' + sn;
function xt(e) {
  var t = e[Fe];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Qe] || n[Fe])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = pu(e); e !== null; ) {
          if ((n = e[Fe])) return n;
          e = pu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function qn(e) {
  return (
    (e = e[Fe] || e[Qe]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Vt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(g(33));
}
function ol(e) {
  return e[An] || null;
}
var gi = [],
  Ht = -1;
function pt(e) {
  return { current: e };
}
function F(e) {
  0 > Ht || ((e.current = gi[Ht]), (gi[Ht] = null), Ht--);
}
function O(e, t) {
  Ht++, (gi[Ht] = e.current), (e.current = t);
}
var ft = {},
  le = pt(ft),
  fe = pt(!1),
  Nt = ft;
function bt(e, t) {
  var n = e.type.contextTypes;
  if (!n) return ft;
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
function de(e) {
  return (e = e.childContextTypes), e != null;
}
function Ur() {
  F(fe), F(le);
}
function mu(e, t, n) {
  if (le.current !== ft) throw Error(g(168));
  O(le, t), O(fe, n);
}
function bs(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(g(108, $c(e) || 'Unknown', l));
  return $({}, n, r);
}
function $r(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ft),
    (Nt = le.current),
    O(le, e),
    O(fe, fe.current),
    !0
  );
}
function hu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(g(169));
  n
    ? ((e = bs(e, t, Nt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      F(fe),
      F(le),
      O(le, e))
    : F(fe),
    O(fe, n);
}
var Ue = null,
  ul = !1,
  Il = !1;
function ea(e) {
  Ue === null ? (Ue = [e]) : Ue.push(e);
}
function id(e) {
  (ul = !0), ea(e);
}
function mt() {
  if (!Il && Ue !== null) {
    Il = !0;
    var e = 0,
      t = R;
    try {
      var n = Ue;
      for (R = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ue = null), (ul = !1);
    } catch (l) {
      throw (Ue !== null && (Ue = Ue.slice(e + 1)), Ns(Zi, mt), l);
    } finally {
      (R = t), (Il = !1);
    }
  }
  return null;
}
var Ut = [],
  $t = 0,
  Ar = null,
  Wr = 0,
  xe = [],
  ke = 0,
  _t = null,
  $e = 1,
  Ae = '';
function yt(e, t) {
  (Ut[$t++] = Wr), (Ut[$t++] = Ar), (Ar = e), (Wr = t);
}
function ta(e, t, n) {
  (xe[ke++] = $e), (xe[ke++] = Ae), (xe[ke++] = _t), (_t = e);
  var r = $e;
  e = Ae;
  var l = 32 - Te(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - Te(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      ($e = (1 << (32 - Te(t) + l)) | (n << l) | r),
      (Ae = i + e);
  } else ($e = (1 << i) | (n << l) | r), (Ae = e);
}
function lo(e) {
  e.return !== null && (yt(e, 1), ta(e, 1, 0));
}
function io(e) {
  for (; e === Ar; )
    (Ar = Ut[--$t]), (Ut[$t] = null), (Wr = Ut[--$t]), (Ut[$t] = null);
  for (; e === _t; )
    (_t = xe[--ke]),
      (xe[ke] = null),
      (Ae = xe[--ke]),
      (xe[ke] = null),
      ($e = xe[--ke]),
      (xe[ke] = null);
}
var ve = null,
  he = null,
  V = !1,
  ze = null;
function na(e, t) {
  var n = Se(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function vu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ve = e), (he = it(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ve = e), (he = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = _t !== null ? { id: $e, overflow: Ae } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Se(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ve = e),
            (he = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function wi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function xi(e) {
  if (V) {
    var t = he;
    if (t) {
      var n = t;
      if (!vu(e, t)) {
        if (wi(e)) throw Error(g(418));
        t = it(n.nextSibling);
        var r = ve;
        t && vu(e, t)
          ? na(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (V = !1), (ve = e));
      }
    } else {
      if (wi(e)) throw Error(g(418));
      (e.flags = (e.flags & -4097) | 2), (V = !1), (ve = e);
    }
  }
}
function yu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ve = e;
}
function pr(e) {
  if (e !== ve) return !1;
  if (!V) return yu(e), (V = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !hi(e.type, e.memoizedProps))),
    t && (t = he))
  ) {
    if (wi(e)) throw (ra(), Error(g(418)));
    for (; t; ) na(e, t), (t = it(t.nextSibling));
  }
  if ((yu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(g(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              he = it(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      he = null;
    }
  } else he = ve ? it(e.stateNode.nextSibling) : null;
  return !0;
}
function ra() {
  for (var e = he; e; ) e = it(e.nextSibling);
}
function en() {
  (he = ve = null), (V = !1);
}
function oo(e) {
  ze === null ? (ze = [e]) : ze.push(e);
}
var od = Xe.ReactCurrentBatchConfig;
function vn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(g(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(g(147, e));
      var l = r,
        i = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var u = l.refs;
            o === null ? delete u[i] : (u[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != 'string') throw Error(g(284));
    if (!n._owner) throw Error(g(290, e));
  }
  return e;
}
function mr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      g(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  );
}
function gu(e) {
  var t = e._init;
  return t(e._payload);
}
function la(e) {
  function t(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
    }
  }
  function n(f, a) {
    if (!e) return null;
    for (; a !== null; ) t(f, a), (a = a.sibling);
    return null;
  }
  function r(f, a) {
    for (f = new Map(); a !== null; )
      a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling);
    return f;
  }
  function l(f, a) {
    return (f = at(f, a)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, a, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d)
            : ((f.flags |= 2), a))
        : ((f.flags |= 1048576), a)
    );
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, a, d, y) {
    return a === null || a.tag !== 6
      ? ((a = Bl(d, f.mode, y)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function s(f, a, d, y) {
    var C = d.type;
    return C === Ot
      ? v(f, a, d.props.children, y, d.key)
      : a !== null &&
        (a.elementType === C ||
          (typeof C == 'object' &&
            C !== null &&
            C.$$typeof === Ge &&
            gu(C) === a.type))
      ? ((y = l(a, d.props)), (y.ref = vn(f, a, d)), (y.return = f), y)
      : ((y = zr(d.type, d.key, d.props, null, f.mode, y)),
        (y.ref = vn(f, a, d)),
        (y.return = f),
        y);
  }
  function c(f, a, d, y) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== d.containerInfo ||
      a.stateNode.implementation !== d.implementation
      ? ((a = Ql(d, f.mode, y)), (a.return = f), a)
      : ((a = l(a, d.children || [])), (a.return = f), a);
  }
  function v(f, a, d, y, C) {
    return a === null || a.tag !== 7
      ? ((a = Et(d, f.mode, y, C)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function h(f, a, d) {
    if ((typeof a == 'string' && a !== '') || typeof a == 'number')
      return (a = Bl('' + a, f.mode, d)), (a.return = f), a;
    if (typeof a == 'object' && a !== null) {
      switch (a.$$typeof) {
        case rr:
          return (
            (d = zr(a.type, a.key, a.props, null, f.mode, d)),
            (d.ref = vn(f, null, a)),
            (d.return = f),
            d
          );
        case Rt:
          return (a = Ql(a, f.mode, d)), (a.return = f), a;
        case Ge:
          var y = a._init;
          return h(f, y(a._payload), d);
      }
      if (xn(a) || fn(a))
        return (a = Et(a, f.mode, d, null)), (a.return = f), a;
      mr(f, a);
    }
    return null;
  }
  function m(f, a, d, y) {
    var C = a !== null ? a.key : null;
    if ((typeof d == 'string' && d !== '') || typeof d == 'number')
      return C !== null ? null : u(f, a, '' + d, y);
    if (typeof d == 'object' && d !== null) {
      switch (d.$$typeof) {
        case rr:
          return d.key === C ? s(f, a, d, y) : null;
        case Rt:
          return d.key === C ? c(f, a, d, y) : null;
        case Ge:
          return (C = d._init), m(f, a, C(d._payload), y);
      }
      if (xn(d) || fn(d)) return C !== null ? null : v(f, a, d, y, null);
      mr(f, d);
    }
    return null;
  }
  function w(f, a, d, y, C) {
    if ((typeof y == 'string' && y !== '') || typeof y == 'number')
      return (f = f.get(d) || null), u(a, f, '' + y, C);
    if (typeof y == 'object' && y !== null) {
      switch (y.$$typeof) {
        case rr:
          return (f = f.get(y.key === null ? d : y.key) || null), s(a, f, y, C);
        case Rt:
          return (f = f.get(y.key === null ? d : y.key) || null), c(a, f, y, C);
        case Ge:
          var N = y._init;
          return w(f, a, d, N(y._payload), C);
      }
      if (xn(y) || fn(y)) return (f = f.get(d) || null), v(a, f, y, C, null);
      mr(a, y);
    }
    return null;
  }
  function x(f, a, d, y) {
    for (
      var C = null, N = null, _ = a, j = (a = 0), W = null;
      _ !== null && j < d.length;
      j++
    ) {
      _.index > j ? ((W = _), (_ = null)) : (W = _.sibling);
      var T = m(f, _, d[j], y);
      if (T === null) {
        _ === null && (_ = W);
        break;
      }
      e && _ && T.alternate === null && t(f, _),
        (a = i(T, a, j)),
        N === null ? (C = T) : (N.sibling = T),
        (N = T),
        (_ = W);
    }
    if (j === d.length) return n(f, _), V && yt(f, j), C;
    if (_ === null) {
      for (; j < d.length; j++)
        (_ = h(f, d[j], y)),
          _ !== null &&
            ((a = i(_, a, j)), N === null ? (C = _) : (N.sibling = _), (N = _));
      return V && yt(f, j), C;
    }
    for (_ = r(f, _); j < d.length; j++)
      (W = w(_, f, j, d[j], y)),
        W !== null &&
          (e && W.alternate !== null && _.delete(W.key === null ? j : W.key),
          (a = i(W, a, j)),
          N === null ? (C = W) : (N.sibling = W),
          (N = W));
    return (
      e &&
        _.forEach(function (_e) {
          return t(f, _e);
        }),
      V && yt(f, j),
      C
    );
  }
  function k(f, a, d, y) {
    var C = fn(d);
    if (typeof C != 'function') throw Error(g(150));
    if (((d = C.call(d)), d == null)) throw Error(g(151));
    for (
      var N = (C = null), _ = a, j = (a = 0), W = null, T = d.next();
      _ !== null && !T.done;
      j++, T = d.next()
    ) {
      _.index > j ? ((W = _), (_ = null)) : (W = _.sibling);
      var _e = m(f, _, T.value, y);
      if (_e === null) {
        _ === null && (_ = W);
        break;
      }
      e && _ && _e.alternate === null && t(f, _),
        (a = i(_e, a, j)),
        N === null ? (C = _e) : (N.sibling = _e),
        (N = _e),
        (_ = W);
    }
    if (T.done) return n(f, _), V && yt(f, j), C;
    if (_ === null) {
      for (; !T.done; j++, T = d.next())
        (T = h(f, T.value, y)),
          T !== null &&
            ((a = i(T, a, j)), N === null ? (C = T) : (N.sibling = T), (N = T));
      return V && yt(f, j), C;
    }
    for (_ = r(f, _); !T.done; j++, T = d.next())
      (T = w(_, f, j, T.value, y)),
        T !== null &&
          (e && T.alternate !== null && _.delete(T.key === null ? j : T.key),
          (a = i(T, a, j)),
          N === null ? (C = T) : (N.sibling = T),
          (N = T));
    return (
      e &&
        _.forEach(function (an) {
          return t(f, an);
        }),
      V && yt(f, j),
      C
    );
  }
  function I(f, a, d, y) {
    if (
      (typeof d == 'object' &&
        d !== null &&
        d.type === Ot &&
        d.key === null &&
        (d = d.props.children),
      typeof d == 'object' && d !== null)
    ) {
      switch (d.$$typeof) {
        case rr:
          e: {
            for (var C = d.key, N = a; N !== null; ) {
              if (N.key === C) {
                if (((C = d.type), C === Ot)) {
                  if (N.tag === 7) {
                    n(f, N.sibling),
                      (a = l(N, d.props.children)),
                      (a.return = f),
                      (f = a);
                    break e;
                  }
                } else if (
                  N.elementType === C ||
                  (typeof C == 'object' &&
                    C !== null &&
                    C.$$typeof === Ge &&
                    gu(C) === N.type)
                ) {
                  n(f, N.sibling),
                    (a = l(N, d.props)),
                    (a.ref = vn(f, N, d)),
                    (a.return = f),
                    (f = a);
                  break e;
                }
                n(f, N);
                break;
              } else t(f, N);
              N = N.sibling;
            }
            d.type === Ot
              ? ((a = Et(d.props.children, f.mode, y, d.key)),
                (a.return = f),
                (f = a))
              : ((y = zr(d.type, d.key, d.props, null, f.mode, y)),
                (y.ref = vn(f, a, d)),
                (y.return = f),
                (f = y));
          }
          return o(f);
        case Rt:
          e: {
            for (N = d.key; a !== null; ) {
              if (a.key === N)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === d.containerInfo &&
                  a.stateNode.implementation === d.implementation
                ) {
                  n(f, a.sibling),
                    (a = l(a, d.children || [])),
                    (a.return = f),
                    (f = a);
                  break e;
                } else {
                  n(f, a);
                  break;
                }
              else t(f, a);
              a = a.sibling;
            }
            (a = Ql(d, f.mode, y)), (a.return = f), (f = a);
          }
          return o(f);
        case Ge:
          return (N = d._init), I(f, a, N(d._payload), y);
      }
      if (xn(d)) return x(f, a, d, y);
      if (fn(d)) return k(f, a, d, y);
      mr(f, d);
    }
    return (typeof d == 'string' && d !== '') || typeof d == 'number'
      ? ((d = '' + d),
        a !== null && a.tag === 6
          ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
          : (n(f, a), (a = Bl(d, f.mode, y)), (a.return = f), (f = a)),
        o(f))
      : n(f, a);
  }
  return I;
}
var tn = la(!0),
  ia = la(!1),
  Br = pt(null),
  Qr = null,
  At = null,
  uo = null;
function so() {
  uo = At = Qr = null;
}
function ao(e) {
  var t = Br.current;
  F(Br), (e._currentValue = t);
}
function ki(e, t, n) {
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
function Zt(e, t) {
  (Qr = e),
    (uo = At = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ce = !0), (e.firstContext = null));
}
function Ee(e) {
  var t = e._currentValue;
  if (uo !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), At === null)) {
      if (Qr === null) throw Error(g(308));
      (At = e), (Qr.dependencies = { lanes: 0, firstContext: e });
    } else At = At.next = e;
  return t;
}
var kt = null;
function co(e) {
  kt === null ? (kt = [e]) : kt.push(e);
}
function oa(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), co(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Ye(e, r)
  );
}
function Ye(e, t) {
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
var Je = !1;
function fo(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ua(e, t) {
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
function We(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ot(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), M & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Ye(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), co(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Ye(e, n)
  );
}
function Er(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Gi(e, n);
  }
}
function wu(e, t) {
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
function Yr(e, t, n, r) {
  var l = e.updateQueue;
  Je = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      c = s.next;
    (s.next = null), o === null ? (i = c) : (o.next = c), (o = s);
    var v = e.alternate;
    v !== null &&
      ((v = v.updateQueue),
      (u = v.lastBaseUpdate),
      u !== o &&
        (u === null ? (v.firstBaseUpdate = c) : (u.next = c),
        (v.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var h = l.baseState;
    (o = 0), (v = c = s = null), (u = i);
    do {
      var m = u.lane,
        w = u.eventTime;
      if ((r & m) === m) {
        v !== null &&
          (v = v.next =
            {
              eventTime: w,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var x = e,
            k = u;
          switch (((m = t), (w = n), k.tag)) {
            case 1:
              if (((x = k.payload), typeof x == 'function')) {
                h = x.call(w, h, m);
                break e;
              }
              h = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = k.payload),
                (m = typeof x == 'function' ? x.call(w, h, m) : x),
                m == null)
              )
                break e;
              h = $({}, h, m);
              break e;
            case 2:
              Je = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [u]) : m.push(u));
      } else
        (w = {
          eventTime: w,
          lane: m,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          v === null ? ((c = v = w), (s = h)) : (v = v.next = w),
          (o |= m);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (m = u),
          (u = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (v === null && (s = h),
      (l.baseState = s),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = v),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (Pt |= o), (e.lanes = o), (e.memoizedState = h);
  }
}
function xu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != 'function'))
          throw Error(g(191, l));
        l.call(r);
      }
    }
}
var bn = {},
  Ve = pt(bn),
  Wn = pt(bn),
  Bn = pt(bn);
function St(e) {
  if (e === bn) throw Error(g(174));
  return e;
}
function po(e, t) {
  switch ((O(Bn, t), O(Wn, e), O(Ve, bn), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ti(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ti(t, e));
  }
  F(Ve), O(Ve, t);
}
function nn() {
  F(Ve), F(Wn), F(Bn);
}
function sa(e) {
  St(Bn.current);
  var t = St(Ve.current),
    n = ti(t, e.type);
  t !== n && (O(Wn, e), O(Ve, n));
}
function mo(e) {
  Wn.current === e && (F(Ve), F(Wn));
}
var H = pt(0);
function Kr(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
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
var Vl = [];
function ho() {
  for (var e = 0; e < Vl.length; e++)
    Vl[e]._workInProgressVersionPrimary = null;
  Vl.length = 0;
}
var Nr = Xe.ReactCurrentDispatcher,
  Hl = Xe.ReactCurrentBatchConfig,
  jt = 0,
  U = null,
  K = null,
  G = null,
  Xr = !1,
  Pn = !1,
  Qn = 0,
  ud = 0;
function te() {
  throw Error(g(321));
}
function vo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Re(e[n], t[n])) return !1;
  return !0;
}
function yo(e, t, n, r, l, i) {
  if (
    ((jt = i),
    (U = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Nr.current = e === null || e.memoizedState === null ? fd : dd),
    (e = n(r, l)),
    Pn)
  ) {
    i = 0;
    do {
      if (((Pn = !1), (Qn = 0), 25 <= i)) throw Error(g(301));
      (i += 1),
        (G = K = null),
        (t.updateQueue = null),
        (Nr.current = pd),
        (e = n(r, l));
    } while (Pn);
  }
  if (
    ((Nr.current = Zr),
    (t = K !== null && K.next !== null),
    (jt = 0),
    (G = K = U = null),
    (Xr = !1),
    t)
  )
    throw Error(g(300));
  return e;
}
function go() {
  var e = Qn !== 0;
  return (Qn = 0), e;
}
function De() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return G === null ? (U.memoizedState = G = e) : (G = G.next = e), G;
}
function Ne() {
  if (K === null) {
    var e = U.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = K.next;
  var t = G === null ? U.memoizedState : G.next;
  if (t !== null) (G = t), (K = e);
  else {
    if (e === null) throw Error(g(310));
    (K = e),
      (e = {
        memoizedState: K.memoizedState,
        baseState: K.baseState,
        baseQueue: K.baseQueue,
        queue: K.queue,
        next: null,
      }),
      G === null ? (U.memoizedState = G = e) : (G = G.next = e);
  }
  return G;
}
function Yn(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function Ul(e) {
  var t = Ne(),
    n = t.queue;
  if (n === null) throw Error(g(311));
  n.lastRenderedReducer = e;
  var r = K,
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
    var u = (o = null),
      s = null,
      c = i;
    do {
      var v = c.lane;
      if ((jt & v) === v)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var h = {
          lane: v,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        s === null ? ((u = s = h), (o = r)) : (s = s.next = h),
          (U.lanes |= v),
          (Pt |= v);
      }
      c = c.next;
    } while (c !== null && c !== i);
    s === null ? (o = r) : (s.next = u),
      Re(r, t.memoizedState) || (ce = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (U.lanes |= i), (Pt |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function $l(e) {
  var t = Ne(),
    n = t.queue;
  if (n === null) throw Error(g(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    Re(i, t.memoizedState) || (ce = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function aa() {}
function ca(e, t) {
  var n = U,
    r = Ne(),
    l = t(),
    i = !Re(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (ce = !0)),
    (r = r.queue),
    wo(pa.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (G !== null && G.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Kn(9, da.bind(null, n, r, l, t), void 0, null),
      J === null)
    )
      throw Error(g(349));
    jt & 30 || fa(n, t, l);
  }
  return l;
}
function fa(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = U.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (U.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function da(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), ma(t) && ha(e);
}
function pa(e, t, n) {
  return n(function () {
    ma(t) && ha(e);
  });
}
function ma(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Re(e, n);
  } catch {
    return !0;
  }
}
function ha(e) {
  var t = Ye(e, 1);
  t !== null && Me(t, e, 1, -1);
}
function ku(e) {
  var t = De();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Yn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = cd.bind(null, U, e)),
    [t.memoizedState, e]
  );
}
function Kn(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = U.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (U.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function va() {
  return Ne().memoizedState;
}
function _r(e, t, n, r) {
  var l = De();
  (U.flags |= e),
    (l.memoizedState = Kn(1 | t, n, void 0, r === void 0 ? null : r));
}
function sl(e, t, n, r) {
  var l = Ne();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (K !== null) {
    var o = K.memoizedState;
    if (((i = o.destroy), r !== null && vo(r, o.deps))) {
      l.memoizedState = Kn(t, n, i, r);
      return;
    }
  }
  (U.flags |= e), (l.memoizedState = Kn(1 | t, n, i, r));
}
function Su(e, t) {
  return _r(8390656, 8, e, t);
}
function wo(e, t) {
  return sl(2048, 8, e, t);
}
function ya(e, t) {
  return sl(4, 2, e, t);
}
function ga(e, t) {
  return sl(4, 4, e, t);
}
function wa(e, t) {
  if (typeof t == 'function')
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
function xa(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), sl(4, 4, wa.bind(null, t, e), n)
  );
}
function xo() {}
function ka(e, t) {
  var n = Ne();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && vo(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Sa(e, t) {
  var n = Ne();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && vo(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ca(e, t, n) {
  return jt & 21
    ? (Re(n, t) || ((n = Ps()), (U.lanes |= n), (Pt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ce = !0)), (e.memoizedState = n));
}
function sd(e, t) {
  var n = R;
  (R = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Hl.transition;
  Hl.transition = {};
  try {
    e(!1), t();
  } finally {
    (R = n), (Hl.transition = r);
  }
}
function Ea() {
  return Ne().memoizedState;
}
function ad(e, t, n) {
  var r = st(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Na(e))
  )
    _a(t, n);
  else if (((n = oa(e, t, n, r)), n !== null)) {
    var l = oe();
    Me(n, e, r, l), ja(n, t, r);
  }
}
function cd(e, t, n) {
  var r = st(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Na(e)) _a(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          u = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Re(u, o))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), co(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = oa(e, t, l, r)),
      n !== null && ((l = oe()), Me(n, e, r, l), ja(n, t, r));
  }
}
function Na(e) {
  var t = e.alternate;
  return e === U || (t !== null && t === U);
}
function _a(e, t) {
  Pn = Xr = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function ja(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Gi(e, n);
  }
}
var Zr = {
    readContext: Ee,
    useCallback: te,
    useContext: te,
    useEffect: te,
    useImperativeHandle: te,
    useInsertionEffect: te,
    useLayoutEffect: te,
    useMemo: te,
    useReducer: te,
    useRef: te,
    useState: te,
    useDebugValue: te,
    useDeferredValue: te,
    useTransition: te,
    useMutableSource: te,
    useSyncExternalStore: te,
    useId: te,
    unstable_isNewReconciler: !1,
  },
  fd = {
    readContext: Ee,
    useCallback: function (e, t) {
      return (De().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ee,
    useEffect: Su,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        _r(4194308, 4, wa.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return _r(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return _r(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = De();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = De();
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
        (e = e.dispatch = ad.bind(null, U, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = De();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ku,
    useDebugValue: xo,
    useDeferredValue: function (e) {
      return (De().memoizedState = e);
    },
    useTransition: function () {
      var e = ku(!1),
        t = e[0];
      return (e = sd.bind(null, e[1])), (De().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = U,
        l = De();
      if (V) {
        if (n === void 0) throw Error(g(407));
        n = n();
      } else {
        if (((n = t()), J === null)) throw Error(g(349));
        jt & 30 || fa(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        Su(pa.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Kn(9, da.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = De(),
        t = J.identifierPrefix;
      if (V) {
        var n = Ae,
          r = $e;
        (n = (r & ~(1 << (32 - Te(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Qn++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = ud++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  dd = {
    readContext: Ee,
    useCallback: ka,
    useContext: Ee,
    useEffect: wo,
    useImperativeHandle: xa,
    useInsertionEffect: ya,
    useLayoutEffect: ga,
    useMemo: Sa,
    useReducer: Ul,
    useRef: va,
    useState: function () {
      return Ul(Yn);
    },
    useDebugValue: xo,
    useDeferredValue: function (e) {
      var t = Ne();
      return Ca(t, K.memoizedState, e);
    },
    useTransition: function () {
      var e = Ul(Yn)[0],
        t = Ne().memoizedState;
      return [e, t];
    },
    useMutableSource: aa,
    useSyncExternalStore: ca,
    useId: Ea,
    unstable_isNewReconciler: !1,
  },
  pd = {
    readContext: Ee,
    useCallback: ka,
    useContext: Ee,
    useEffect: wo,
    useImperativeHandle: xa,
    useInsertionEffect: ya,
    useLayoutEffect: ga,
    useMemo: Sa,
    useReducer: $l,
    useRef: va,
    useState: function () {
      return $l(Yn);
    },
    useDebugValue: xo,
    useDeferredValue: function (e) {
      var t = Ne();
      return K === null ? (t.memoizedState = e) : Ca(t, K.memoizedState, e);
    },
    useTransition: function () {
      var e = $l(Yn)[0],
        t = Ne().memoizedState;
      return [e, t];
    },
    useMutableSource: aa,
    useSyncExternalStore: ca,
    useId: Ea,
    unstable_isNewReconciler: !1,
  };
function Pe(e, t) {
  if (e && e.defaultProps) {
    (t = $({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Si(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : $({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var al = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Tt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = oe(),
      l = st(e),
      i = We(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = ot(e, i, l)),
      t !== null && (Me(t, e, l, r), Er(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = oe(),
      l = st(e),
      i = We(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = ot(e, i, l)),
      t !== null && (Me(t, e, l, r), Er(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = oe(),
      r = st(e),
      l = We(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = ot(e, l, r)),
      t !== null && (Me(t, e, r, n), Er(t, e, r));
  },
};
function Cu(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Hn(n, r) || !Hn(l, i)
      : !0
  );
}
function Pa(e, t, n) {
  var r = !1,
    l = ft,
    i = t.contextType;
  return (
    typeof i == 'object' && i !== null
      ? (i = Ee(i))
      : ((l = de(t) ? Nt : le.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? bt(e, l) : ft)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = al),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Eu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && al.enqueueReplaceState(t, t.state, null);
}
function Ci(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), fo(e);
  var i = t.contextType;
  typeof i == 'object' && i !== null
    ? (l.context = Ee(i))
    : ((i = de(t) ? Nt : le.current), (l.context = bt(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (Si(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof l.getSnapshotBeforeUpdate == 'function' ||
      (typeof l.UNSAFE_componentWillMount != 'function' &&
        typeof l.componentWillMount != 'function') ||
      ((t = l.state),
      typeof l.componentWillMount == 'function' && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == 'function' &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && al.enqueueReplaceState(l, l.state, null),
      Yr(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == 'function' && (e.flags |= 4194308);
}
function rn(e, t) {
  try {
    var n = '',
      r = t;
    do (n += Uc(r)), (r = r.return);
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
function Al(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ei(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var md = typeof WeakMap == 'function' ? WeakMap : Map;
function La(e, t, n) {
  (n = We(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Jr || ((Jr = !0), (Oi = r)), Ei(e, t);
    }),
    n
  );
}
function za(e, t, n) {
  (n = We(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Ei(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        Ei(e, t),
          typeof r != 'function' &&
            (ut === null ? (ut = new Set([this])) : ut.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : '',
        });
      }),
    n
  );
}
function Nu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new md();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Pd.bind(null, e, t, n)), t.then(e, e));
}
function _u(e) {
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
function ju(e, t, n, r, l) {
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
              : ((t = We(-1, 1)), (t.tag = 2), ot(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var hd = Xe.ReactCurrentOwner,
  ce = !1;
function ie(e, t, n, r) {
  t.child = e === null ? ia(t, null, n, r) : tn(t, e.child, n, r);
}
function Pu(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    Zt(t, l),
    (r = yo(e, t, n, r, i, l)),
    (n = go()),
    e !== null && !ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ke(e, t, l))
      : (V && n && lo(t), (t.flags |= 1), ie(e, t, r, l), t.child)
  );
}
function Lu(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == 'function' &&
      !Po(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Ta(e, t, i, r, l))
      : ((e = zr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Hn), n(o, r) && e.ref === t.ref)
    )
      return Ke(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = at(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Ta(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Hn(i, r) && e.ref === t.ref)
      if (((ce = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (ce = !0);
      else return (t.lanes = e.lanes), Ke(e, t, l);
  }
  return Ni(e, t, n, r, l);
}
function Ma(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        O(Bt, me),
        (me |= n);
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
          O(Bt, me),
          (me |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        O(Bt, me),
        (me |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      O(Bt, me),
      (me |= r);
  return ie(e, t, l, n), t.child;
}
function Ra(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ni(e, t, n, r, l) {
  var i = de(n) ? Nt : le.current;
  return (
    (i = bt(t, i)),
    Zt(t, l),
    (n = yo(e, t, n, r, i, l)),
    (r = go()),
    e !== null && !ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ke(e, t, l))
      : (V && r && lo(t), (t.flags |= 1), ie(e, t, n, l), t.child)
  );
}
function zu(e, t, n, r, l) {
  if (de(n)) {
    var i = !0;
    $r(t);
  } else i = !1;
  if ((Zt(t, l), t.stateNode === null))
    jr(e, t), Pa(t, n, r), Ci(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      u = t.memoizedProps;
    o.props = u;
    var s = o.context,
      c = n.contextType;
    typeof c == 'object' && c !== null
      ? (c = Ee(c))
      : ((c = de(n) ? Nt : le.current), (c = bt(t, c)));
    var v = n.getDerivedStateFromProps,
      h =
        typeof v == 'function' ||
        typeof o.getSnapshotBeforeUpdate == 'function';
    h ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((u !== r || s !== c) && Eu(t, o, r, c)),
      (Je = !1);
    var m = t.memoizedState;
    (o.state = m),
      Yr(t, r, o, l),
      (s = t.memoizedState),
      u !== r || m !== s || fe.current || Je
        ? (typeof v == 'function' && (Si(t, n, v, r), (s = t.memoizedState)),
          (u = Je || Cu(t, n, u, r, m, s, c))
            ? (h ||
                (typeof o.UNSAFE_componentWillMount != 'function' &&
                  typeof o.componentWillMount != 'function') ||
                (typeof o.componentWillMount == 'function' &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == 'function' &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = c),
          (r = u))
        : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      ua(e, t),
      (u = t.memoizedProps),
      (c = t.type === t.elementType ? u : Pe(t.type, u)),
      (o.props = c),
      (h = t.pendingProps),
      (m = o.context),
      (s = n.contextType),
      typeof s == 'object' && s !== null
        ? (s = Ee(s))
        : ((s = de(n) ? Nt : le.current), (s = bt(t, s)));
    var w = n.getDerivedStateFromProps;
    (v =
      typeof w == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function') ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((u !== h || m !== s) && Eu(t, o, r, s)),
      (Je = !1),
      (m = t.memoizedState),
      (o.state = m),
      Yr(t, r, o, l);
    var x = t.memoizedState;
    u !== h || m !== x || fe.current || Je
      ? (typeof w == 'function' && (Si(t, n, w, r), (x = t.memoizedState)),
        (c = Je || Cu(t, n, c, r, m, x, s) || !1)
          ? (v ||
              (typeof o.UNSAFE_componentWillUpdate != 'function' &&
                typeof o.componentWillUpdate != 'function') ||
              (typeof o.componentWillUpdate == 'function' &&
                o.componentWillUpdate(r, x, s),
              typeof o.UNSAFE_componentWillUpdate == 'function' &&
                o.UNSAFE_componentWillUpdate(r, x, s)),
            typeof o.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != 'function' ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != 'function' ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (o.props = r),
        (o.state = x),
        (o.context = s),
        (r = c))
      : (typeof o.componentDidUpdate != 'function' ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != 'function' ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return _i(e, t, n, r, i, l);
}
function _i(e, t, n, r, l, i) {
  Ra(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && hu(t, n, !1), Ke(e, t, i);
  (r = t.stateNode), (hd.current = t);
  var u =
    o && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = tn(t, e.child, null, i)), (t.child = tn(t, null, u, i)))
      : ie(e, t, u, i),
    (t.memoizedState = r.state),
    l && hu(t, n, !0),
    t.child
  );
}
function Oa(e) {
  var t = e.stateNode;
  t.pendingContext
    ? mu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && mu(e, t.context, !1),
    po(e, t.containerInfo);
}
function Tu(e, t, n, r, l) {
  return en(), oo(l), (t.flags |= 256), ie(e, t, n, r), t.child;
}
var ji = { dehydrated: null, treeContext: null, retryLane: 0 };
function Pi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Da(e, t, n) {
  var r = t.pendingProps,
    l = H.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    u;
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    O(H, l & 1),
    e === null)
  )
    return (
      xi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: 'hidden', children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = dl(o, r, 0, null)),
              (e = Et(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Pi(n)),
              (t.memoizedState = ji),
              e)
            : ko(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return vd(e, t, o, r, u, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: 'hidden', children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = at(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = at(u, i)) : ((i = Et(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Pi(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = ji),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = at(i, { mode: 'visible', children: r.children })),
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
function ko(e, t) {
  return (
    (t = dl({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function hr(e, t, n, r) {
  return (
    r !== null && oo(r),
    tn(t, e.child, null, n),
    (e = ko(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function vd(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Al(Error(g(422)))), hr(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = dl({ mode: 'visible', children: r.children }, l, 0, null)),
        (i = Et(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && tn(t, e.child, null, o),
        (t.child.memoizedState = Pi(o)),
        (t.memoizedState = ji),
        i);
  if (!(t.mode & 1)) return hr(e, t, o, null);
  if (l.data === '$!') {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(g(419))), (r = Al(i, r, void 0)), hr(e, t, o, r);
  }
  if (((u = (o & e.childLanes) !== 0), ce || u)) {
    if (((r = J), r !== null)) {
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
          ((i.retryLane = l), Ye(e, l), Me(r, e, l, -1));
    }
    return jo(), (r = Al(Error(g(421)))), hr(e, t, o, r);
  }
  return l.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Ld.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (he = it(l.nextSibling)),
      (ve = t),
      (V = !0),
      (ze = null),
      e !== null &&
        ((xe[ke++] = $e),
        (xe[ke++] = Ae),
        (xe[ke++] = _t),
        ($e = e.id),
        (Ae = e.overflow),
        (_t = t)),
      (t = ko(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Mu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ki(e.return, t, n);
}
function Wl(e, t, n, r, l) {
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
function Fa(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((ie(e, t, r.children, n), (r = H.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Mu(e, n, t);
        else if (e.tag === 19) Mu(e, n, t);
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
  if ((O(H, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case 'forwards':
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Kr(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Wl(t, !1, l, n, i);
        break;
      case 'backwards':
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Kr(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Wl(t, !0, n, null, i);
        break;
      case 'together':
        Wl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function jr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ke(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Pt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(g(153));
  if (t.child !== null) {
    for (
      e = t.child, n = at(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = at(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function yd(e, t, n) {
  switch (t.tag) {
    case 3:
      Oa(t), en();
      break;
    case 5:
      sa(t);
      break;
    case 1:
      de(t.type) && $r(t);
      break;
    case 4:
      po(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      O(Br, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (O(H, H.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Da(e, t, n)
          : (O(H, H.current & 1),
            (e = Ke(e, t, n)),
            e !== null ? e.sibling : null);
      O(H, H.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Fa(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        O(H, H.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Ma(e, t, n);
  }
  return Ke(e, t, n);
}
var Ia, Li, Va, Ha;
Ia = function (e, t) {
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
Li = function () {};
Va = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), St(Ve.current);
    var i = null;
    switch (n) {
      case 'input':
        (l = Jl(e, l)), (r = Jl(e, r)), (i = []);
        break;
      case 'select':
        (l = $({}, l, { value: void 0 })),
          (r = $({}, r, { value: void 0 })),
          (i = []);
        break;
      case 'textarea':
        (l = ei(e, l)), (r = ei(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = Hr);
    }
    ni(n, r);
    var o;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === 'style') {
          var u = l[c];
          for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''));
        } else
          c !== 'dangerouslySetInnerHTML' &&
            c !== 'children' &&
            c !== 'suppressContentEditableWarning' &&
            c !== 'suppressHydrationWarning' &&
            c !== 'autoFocus' &&
            (Mn.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (
        ((u = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && s !== u && (s != null || u != null))
      )
        if (c === 'style')
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ''));
            for (o in s)
              s.hasOwnProperty(o) &&
                u[o] !== s[o] &&
                (n || (n = {}), (n[o] = s[o]));
          } else n || (i || (i = []), i.push(c, n)), (n = s);
        else
          c === 'dangerouslySetInnerHTML'
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (i = i || []).push(c, s))
            : c === 'children'
            ? (typeof s != 'string' && typeof s != 'number') ||
              (i = i || []).push(c, '' + s)
            : c !== 'suppressContentEditableWarning' &&
              c !== 'suppressHydrationWarning' &&
              (Mn.hasOwnProperty(c)
                ? (s != null && c === 'onScroll' && D('scroll', e),
                  i || u === s || (i = []))
                : (i = i || []).push(c, s));
    }
    n && (i = i || []).push('style', n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Ha = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function yn(e, t) {
  if (!V)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
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
function ne(e) {
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
function gd(e, t, n) {
  var r = t.pendingProps;
  switch ((io(t), t.tag)) {
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
      return ne(t), null;
    case 1:
      return de(t.type) && Ur(), ne(t), null;
    case 3:
      return (
        (r = t.stateNode),
        nn(),
        F(fe),
        F(le),
        ho(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (pr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ze !== null && (Ii(ze), (ze = null)))),
        Li(e, t),
        ne(t),
        null
      );
    case 5:
      mo(t);
      var l = St(Bn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Va(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(g(166));
          return ne(t), null;
        }
        if (((e = St(Ve.current)), pr(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Fe] = t), (r[An] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              D('cancel', r), D('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              D('load', r);
              break;
            case 'video':
            case 'audio':
              for (l = 0; l < Sn.length; l++) D(Sn[l], r);
              break;
            case 'source':
              D('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              D('error', r), D('load', r);
              break;
            case 'details':
              D('toggle', r);
              break;
            case 'input':
              $o(r, i), D('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                D('invalid', r);
              break;
            case 'textarea':
              Wo(r, i), D('invalid', r);
          }
          ni(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === 'children'
                ? typeof u == 'string'
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      dr(r.textContent, u, e),
                    (l = ['children', u]))
                  : typeof u == 'number' &&
                    r.textContent !== '' + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      dr(r.textContent, u, e),
                    (l = ['children', '' + u]))
                : Mn.hasOwnProperty(o) &&
                  u != null &&
                  o === 'onScroll' &&
                  D('scroll', r);
            }
          switch (n) {
            case 'input':
              lr(r), Ao(r, i, !0);
              break;
            case 'textarea':
              lr(r), Bo(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof i.onClick == 'function' && (r.onclick = Hr);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = ps(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = o.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === 'select' &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Fe] = t),
            (e[An] = r),
            Ia(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = ri(n, r)), n)) {
              case 'dialog':
                D('cancel', e), D('close', e), (l = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                D('load', e), (l = r);
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < Sn.length; l++) D(Sn[l], e);
                l = r;
                break;
              case 'source':
                D('error', e), (l = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                D('error', e), D('load', e), (l = r);
                break;
              case 'details':
                D('toggle', e), (l = r);
                break;
              case 'input':
                $o(e, r), (l = Jl(e, r)), D('invalid', e);
                break;
              case 'option':
                l = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = $({}, r, { value: void 0 })),
                  D('invalid', e);
                break;
              case 'textarea':
                Wo(e, r), (l = ei(e, r)), D('invalid', e);
                break;
              default:
                l = r;
            }
            ni(n, l), (u = l);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === 'style'
                  ? vs(e, s)
                  : i === 'dangerouslySetInnerHTML'
                  ? ((s = s ? s.__html : void 0), s != null && ms(e, s))
                  : i === 'children'
                  ? typeof s == 'string'
                    ? (n !== 'textarea' || s !== '') && Rn(e, s)
                    : typeof s == 'number' && Rn(e, '' + s)
                  : i !== 'suppressContentEditableWarning' &&
                    i !== 'suppressHydrationWarning' &&
                    i !== 'autoFocus' &&
                    (Mn.hasOwnProperty(i)
                      ? s != null && i === 'onScroll' && D('scroll', e)
                      : s != null && Bi(e, i, s, o));
              }
            switch (n) {
              case 'input':
                lr(e), Ao(e, r, !1);
                break;
              case 'textarea':
                lr(e), Bo(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + ct(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Qt(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Qt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == 'function' && (e.onclick = Hr);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
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
      return ne(t), null;
    case 6:
      if (e && t.stateNode != null) Ha(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(g(166));
        if (((n = St(Bn.current)), St(Ve.current), pr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Fe] = t),
            (i = r.nodeValue !== n) && ((e = ve), e !== null))
          )
            switch (e.tag) {
              case 3:
                dr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  dr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Fe] = t),
            (t.stateNode = r);
      }
      return ne(t), null;
    case 13:
      if (
        (F(H),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (V && he !== null && t.mode & 1 && !(t.flags & 128))
          ra(), en(), (t.flags |= 98560), (i = !1);
        else if (((i = pr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(g(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(g(317));
            i[Fe] = t;
          } else
            en(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ne(t), (i = !1);
        } else ze !== null && (Ii(ze), (ze = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || H.current & 1 ? X === 0 && (X = 3) : jo())),
          t.updateQueue !== null && (t.flags |= 4),
          ne(t),
          null);
    case 4:
      return (
        nn(), Li(e, t), e === null && Un(t.stateNode.containerInfo), ne(t), null
      );
    case 10:
      return ao(t.type._context), ne(t), null;
    case 17:
      return de(t.type) && Ur(), ne(t), null;
    case 19:
      if ((F(H), (i = t.memoizedState), i === null)) return ne(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) yn(i, !1);
        else {
          if (X !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Kr(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    yn(i, !1),
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
                return O(H, (H.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Q() > ln &&
            ((t.flags |= 128), (r = !0), yn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Kr(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              yn(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !o.alternate && !V)
            )
              return ne(t), null;
          } else
            2 * Q() - i.renderingStartTime > ln &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), yn(i, !1), (t.lanes = 4194304));
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
          (i.renderingStartTime = Q()),
          (t.sibling = null),
          (n = H.current),
          O(H, r ? (n & 1) | 2 : n & 1),
          t)
        : (ne(t), null);
    case 22:
    case 23:
      return (
        _o(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? me & 1073741824 && (ne(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ne(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(g(156, t.tag));
}
function wd(e, t) {
  switch ((io(t), t.tag)) {
    case 1:
      return (
        de(t.type) && Ur(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        nn(),
        F(fe),
        F(le),
        ho(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return mo(t), null;
    case 13:
      if ((F(H), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(g(340));
        en();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return F(H), null;
    case 4:
      return nn(), null;
    case 10:
      return ao(t.type._context), null;
    case 22:
    case 23:
      return _o(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var vr = !1,
  re = !1,
  xd = typeof WeakSet == 'function' ? WeakSet : Set,
  S = null;
function Wt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        A(e, t, r);
      }
    else n.current = null;
}
function zi(e, t, n) {
  try {
    n();
  } catch (r) {
    A(e, t, r);
  }
}
var Ru = !1;
function kd(e, t) {
  if (((pi = Fr), (e = Bs()), ro(e))) {
    if ('selectionStart' in e)
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
            u = -1,
            s = -1,
            c = 0,
            v = 0,
            h = e,
            m = null;
          t: for (;;) {
            for (
              var w;
              h !== n || (l !== 0 && h.nodeType !== 3) || (u = o + l),
                h !== i || (r !== 0 && h.nodeType !== 3) || (s = o + r),
                h.nodeType === 3 && (o += h.nodeValue.length),
                (w = h.firstChild) !== null;

            )
              (m = h), (h = w);
            for (;;) {
              if (h === e) break t;
              if (
                (m === n && ++c === l && (u = o),
                m === i && ++v === r && (s = o),
                (w = h.nextSibling) !== null)
              )
                break;
              (h = m), (m = h.parentNode);
            }
            h = w;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (mi = { focusedElem: e, selectionRange: n }, Fr = !1, S = t; S !== null; )
    if (((t = S), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (S = e);
    else
      for (; S !== null; ) {
        t = S;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var k = x.memoizedProps,
                    I = x.memoizedState,
                    f = t.stateNode,
                    a = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? k : Pe(t.type, k),
                      I
                    );
                  f.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = '')
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(g(163));
            }
        } catch (y) {
          A(t, t.return, y);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (S = e);
          break;
        }
        S = t.return;
      }
  return (x = Ru), (Ru = !1), x;
}
function Ln(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && zi(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function cl(e, t) {
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
function Ti(e) {
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
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function Ua(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ua(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Fe], delete t[An], delete t[yi], delete t[rd], delete t[ld])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function $a(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ou(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || $a(e.return)) return null;
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
function Mi(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = Hr));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Mi(e, t, n), e = e.sibling; e !== null; ) Mi(e, t, n), (e = e.sibling);
}
function Ri(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ri(e, t, n), e = e.sibling; e !== null; ) Ri(e, t, n), (e = e.sibling);
}
var q = null,
  Le = !1;
function Ze(e, t, n) {
  for (n = n.child; n !== null; ) Aa(e, t, n), (n = n.sibling);
}
function Aa(e, t, n) {
  if (Ie && typeof Ie.onCommitFiberUnmount == 'function')
    try {
      Ie.onCommitFiberUnmount(nl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      re || Wt(n, t);
    case 6:
      var r = q,
        l = Le;
      (q = null),
        Ze(e, t, n),
        (q = r),
        (Le = l),
        q !== null &&
          (Le
            ? ((e = q),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : q.removeChild(n.stateNode));
      break;
    case 18:
      q !== null &&
        (Le
          ? ((e = q),
            (n = n.stateNode),
            e.nodeType === 8
              ? Fl(e.parentNode, n)
              : e.nodeType === 1 && Fl(e, n),
            In(e))
          : Fl(q, n.stateNode));
      break;
    case 4:
      (r = q),
        (l = Le),
        (q = n.stateNode.containerInfo),
        (Le = !0),
        Ze(e, t, n),
        (q = r),
        (Le = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !re &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && zi(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      Ze(e, t, n);
      break;
    case 1:
      if (
        !re &&
        (Wt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          A(n, t, u);
        }
      Ze(e, t, n);
      break;
    case 21:
      Ze(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((re = (r = re) || n.memoizedState !== null), Ze(e, t, n), (re = r))
        : Ze(e, t, n);
      break;
    default:
      Ze(e, t, n);
  }
}
function Du(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new xd()),
      t.forEach(function (r) {
        var l = zd.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function je(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (q = u.stateNode), (Le = !1);
              break e;
            case 3:
              (q = u.stateNode.containerInfo), (Le = !0);
              break e;
            case 4:
              (q = u.stateNode.containerInfo), (Le = !0);
              break e;
          }
          u = u.return;
        }
        if (q === null) throw Error(g(160));
        Aa(i, o, l), (q = null), (Le = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (c) {
        A(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Wa(t, e), (t = t.sibling);
}
function Wa(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((je(t, e), Oe(e), r & 4)) {
        try {
          Ln(3, e, e.return), cl(3, e);
        } catch (k) {
          A(e, e.return, k);
        }
        try {
          Ln(5, e, e.return);
        } catch (k) {
          A(e, e.return, k);
        }
      }
      break;
    case 1:
      je(t, e), Oe(e), r & 512 && n !== null && Wt(n, n.return);
      break;
    case 5:
      if (
        (je(t, e),
        Oe(e),
        r & 512 && n !== null && Wt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Rn(l, '');
        } catch (k) {
          A(e, e.return, k);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === 'input' && i.type === 'radio' && i.name != null && fs(l, i),
              ri(u, o);
            var c = ri(u, i);
            for (o = 0; o < s.length; o += 2) {
              var v = s[o],
                h = s[o + 1];
              v === 'style'
                ? vs(l, h)
                : v === 'dangerouslySetInnerHTML'
                ? ms(l, h)
                : v === 'children'
                ? Rn(l, h)
                : Bi(l, v, h, c);
            }
            switch (u) {
              case 'input':
                ql(l, i);
                break;
              case 'textarea':
                ds(l, i);
                break;
              case 'select':
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var w = i.value;
                w != null
                  ? Qt(l, !!i.multiple, w, !1)
                  : m !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Qt(l, !!i.multiple, i.defaultValue, !0)
                      : Qt(l, !!i.multiple, i.multiple ? [] : '', !1));
            }
            l[An] = i;
          } catch (k) {
            A(e, e.return, k);
          }
      }
      break;
    case 6:
      if ((je(t, e), Oe(e), r & 4)) {
        if (e.stateNode === null) throw Error(g(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (k) {
          A(e, e.return, k);
        }
      }
      break;
    case 3:
      if (
        (je(t, e), Oe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          In(t.containerInfo);
        } catch (k) {
          A(e, e.return, k);
        }
      break;
    case 4:
      je(t, e), Oe(e);
      break;
    case 13:
      je(t, e),
        Oe(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Eo = Q())),
        r & 4 && Du(e);
      break;
    case 22:
      if (
        ((v = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((re = (c = re) || v), je(t, e), (re = c)) : je(t, e),
        Oe(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !v && e.mode & 1)
        )
          for (S = e, v = e.child; v !== null; ) {
            for (h = S = v; S !== null; ) {
              switch (((m = S), (w = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ln(4, m, m.return);
                  break;
                case 1:
                  Wt(m, m.return);
                  var x = m.stateNode;
                  if (typeof x.componentWillUnmount == 'function') {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount();
                    } catch (k) {
                      A(r, n, k);
                    }
                  }
                  break;
                case 5:
                  Wt(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Iu(h);
                    continue;
                  }
              }
              w !== null ? ((w.return = m), (S = w)) : Iu(h);
            }
            v = v.sibling;
          }
        e: for (v = null, h = e; ; ) {
          if (h.tag === 5) {
            if (v === null) {
              v = h;
              try {
                (l = h.stateNode),
                  c
                    ? ((i = l.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((u = h.stateNode),
                      (s = h.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty('display')
                          ? s.display
                          : null),
                      (u.style.display = hs('display', o)));
              } catch (k) {
                A(e, e.return, k);
              }
            }
          } else if (h.tag === 6) {
            if (v === null)
              try {
                h.stateNode.nodeValue = c ? '' : h.memoizedProps;
              } catch (k) {
                A(e, e.return, k);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            v === h && (v = null), (h = h.return);
          }
          v === h && (v = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      je(t, e), Oe(e), r & 4 && Du(e);
      break;
    case 21:
      break;
    default:
      je(t, e), Oe(e);
  }
}
function Oe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if ($a(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(g(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Rn(l, ''), (r.flags &= -33));
          var i = Ou(e);
          Ri(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = Ou(e);
          Mi(e, u, o);
          break;
        default:
          throw Error(g(161));
      }
    } catch (s) {
      A(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Sd(e, t, n) {
  (S = e), Ba(e);
}
function Ba(e, t, n) {
  for (var r = (e.mode & 1) !== 0; S !== null; ) {
    var l = S,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || vr;
      if (!o) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || re;
        u = vr;
        var c = re;
        if (((vr = o), (re = s) && !c))
          for (S = l; S !== null; )
            (o = S),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Vu(l)
                : s !== null
                ? ((s.return = o), (S = s))
                : Vu(l);
        for (; i !== null; ) (S = i), Ba(i), (i = i.sibling);
        (S = l), (vr = u), (re = c);
      }
      Fu(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (S = i)) : Fu(e);
  }
}
function Fu(e) {
  for (; S !== null; ) {
    var t = S;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              re || cl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !re)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Pe(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && xu(t, i, r);
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
                xu(t, o, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    s.autoFocus && n.focus();
                    break;
                  case 'img':
                    s.src && (n.src = s.src);
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
                var c = t.alternate;
                if (c !== null) {
                  var v = c.memoizedState;
                  if (v !== null) {
                    var h = v.dehydrated;
                    h !== null && In(h);
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
              throw Error(g(163));
          }
        re || (t.flags & 512 && Ti(t));
      } catch (m) {
        A(t, t.return, m);
      }
    }
    if (t === e) {
      S = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (S = n);
      break;
    }
    S = t.return;
  }
}
function Iu(e) {
  for (; S !== null; ) {
    var t = S;
    if (t === e) {
      S = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (S = n);
      break;
    }
    S = t.return;
  }
}
function Vu(e) {
  for (; S !== null; ) {
    var t = S;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            cl(4, t);
          } catch (s) {
            A(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              A(t, l, s);
            }
          }
          var i = t.return;
          try {
            Ti(t);
          } catch (s) {
            A(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Ti(t);
          } catch (s) {
            A(t, o, s);
          }
      }
    } catch (s) {
      A(t, t.return, s);
    }
    if (t === e) {
      S = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (S = u);
      break;
    }
    S = t.return;
  }
}
var Cd = Math.ceil,
  Gr = Xe.ReactCurrentDispatcher,
  So = Xe.ReactCurrentOwner,
  Ce = Xe.ReactCurrentBatchConfig,
  M = 0,
  J = null,
  Y = null,
  b = 0,
  me = 0,
  Bt = pt(0),
  X = 0,
  Xn = null,
  Pt = 0,
  fl = 0,
  Co = 0,
  zn = null,
  ae = null,
  Eo = 0,
  ln = 1 / 0,
  He = null,
  Jr = !1,
  Oi = null,
  ut = null,
  yr = !1,
  tt = null,
  qr = 0,
  Tn = 0,
  Di = null,
  Pr = -1,
  Lr = 0;
function oe() {
  return M & 6 ? Q() : Pr !== -1 ? Pr : (Pr = Q());
}
function st(e) {
  return e.mode & 1
    ? M & 2 && b !== 0
      ? b & -b
      : od.transition !== null
      ? (Lr === 0 && (Lr = Ps()), Lr)
      : ((e = R),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ds(e.type))),
        e)
    : 1;
}
function Me(e, t, n, r) {
  if (50 < Tn) throw ((Tn = 0), (Di = null), Error(g(185)));
  Gn(e, n, r),
    (!(M & 2) || e !== J) &&
      (e === J && (!(M & 2) && (fl |= n), X === 4 && be(e, b)),
      pe(e, r),
      n === 1 && M === 0 && !(t.mode & 1) && ((ln = Q() + 500), ul && mt()));
}
function pe(e, t) {
  var n = e.callbackNode;
  of(e, t);
  var r = Dr(e, e === J ? b : 0);
  if (r === 0)
    n !== null && Ko(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ko(n), t === 1))
      e.tag === 0 ? id(Hu.bind(null, e)) : ea(Hu.bind(null, e)),
        td(function () {
          !(M & 6) && mt();
        }),
        (n = null);
    else {
      switch (Ls(r)) {
        case 1:
          n = Zi;
          break;
        case 4:
          n = _s;
          break;
        case 16:
          n = Or;
          break;
        case 536870912:
          n = js;
          break;
        default:
          n = Or;
      }
      n = qa(n, Qa.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Qa(e, t) {
  if (((Pr = -1), (Lr = 0), M & 6)) throw Error(g(327));
  var n = e.callbackNode;
  if (Gt() && e.callbackNode !== n) return null;
  var r = Dr(e, e === J ? b : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = br(e, r);
  else {
    t = r;
    var l = M;
    M |= 2;
    var i = Ka();
    (J !== e || b !== t) && ((He = null), (ln = Q() + 500), Ct(e, t));
    do
      try {
        _d();
        break;
      } catch (u) {
        Ya(e, u);
      }
    while (!0);
    so(),
      (Gr.current = i),
      (M = l),
      Y !== null ? (t = 0) : ((J = null), (b = 0), (t = X));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = si(e)), l !== 0 && ((r = l), (t = Fi(e, l)))), t === 1)
    )
      throw ((n = Xn), Ct(e, 0), be(e, r), pe(e, Q()), n);
    if (t === 6) be(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Ed(l) &&
          ((t = br(e, r)),
          t === 2 && ((i = si(e)), i !== 0 && ((r = i), (t = Fi(e, i)))),
          t === 1))
      )
        throw ((n = Xn), Ct(e, 0), be(e, r), pe(e, Q()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(g(345));
        case 2:
          gt(e, ae, He);
          break;
        case 3:
          if (
            (be(e, r), (r & 130023424) === r && ((t = Eo + 500 - Q()), 10 < t))
          ) {
            if (Dr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              oe(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = vi(gt.bind(null, e, ae, He), t);
            break;
          }
          gt(e, ae, He);
          break;
        case 4:
          if ((be(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Te(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = Q() - r),
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
                : 1960 * Cd(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = vi(gt.bind(null, e, ae, He), r);
            break;
          }
          gt(e, ae, He);
          break;
        case 5:
          gt(e, ae, He);
          break;
        default:
          throw Error(g(329));
      }
    }
  }
  return pe(e, Q()), e.callbackNode === n ? Qa.bind(null, e) : null;
}
function Fi(e, t) {
  var n = zn;
  return (
    e.current.memoizedState.isDehydrated && (Ct(e, t).flags |= 256),
    (e = br(e, t)),
    e !== 2 && ((t = ae), (ae = n), t !== null && Ii(t)),
    e
  );
}
function Ii(e) {
  ae === null ? (ae = e) : ae.push.apply(ae, e);
}
function Ed(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Re(i(), l)) return !1;
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
function be(e, t) {
  for (
    t &= ~Co,
      t &= ~fl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Te(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Hu(e) {
  if (M & 6) throw Error(g(327));
  Gt();
  var t = Dr(e, 0);
  if (!(t & 1)) return pe(e, Q()), null;
  var n = br(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = si(e);
    r !== 0 && ((t = r), (n = Fi(e, r)));
  }
  if (n === 1) throw ((n = Xn), Ct(e, 0), be(e, t), pe(e, Q()), n);
  if (n === 6) throw Error(g(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    gt(e, ae, He),
    pe(e, Q()),
    null
  );
}
function No(e, t) {
  var n = M;
  M |= 1;
  try {
    return e(t);
  } finally {
    (M = n), M === 0 && ((ln = Q() + 500), ul && mt());
  }
}
function Lt(e) {
  tt !== null && tt.tag === 0 && !(M & 6) && Gt();
  var t = M;
  M |= 1;
  var n = Ce.transition,
    r = R;
  try {
    if (((Ce.transition = null), (R = 1), e)) return e();
  } finally {
    (R = r), (Ce.transition = n), (M = t), !(M & 6) && mt();
  }
}
function _o() {
  (me = Bt.current), F(Bt);
}
function Ct(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), ed(n)), Y !== null))
    for (n = Y.return; n !== null; ) {
      var r = n;
      switch ((io(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ur();
          break;
        case 3:
          nn(), F(fe), F(le), ho();
          break;
        case 5:
          mo(r);
          break;
        case 4:
          nn();
          break;
        case 13:
          F(H);
          break;
        case 19:
          F(H);
          break;
        case 10:
          ao(r.type._context);
          break;
        case 22:
        case 23:
          _o();
      }
      n = n.return;
    }
  if (
    ((J = e),
    (Y = e = at(e.current, null)),
    (b = me = t),
    (X = 0),
    (Xn = null),
    (Co = fl = Pt = 0),
    (ae = zn = null),
    kt !== null)
  ) {
    for (t = 0; t < kt.length; t++)
      if (((n = kt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    kt = null;
  }
  return e;
}
function Ya(e, t) {
  do {
    var n = Y;
    try {
      if ((so(), (Nr.current = Zr), Xr)) {
        for (var r = U.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Xr = !1;
      }
      if (
        ((jt = 0),
        (G = K = U = null),
        (Pn = !1),
        (Qn = 0),
        (So.current = null),
        n === null || n.return === null)
      ) {
        (X = 1), (Xn = t), (Y = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          u = n,
          s = t;
        if (
          ((t = b),
          (u.flags |= 32768),
          s !== null && typeof s == 'object' && typeof s.then == 'function')
        ) {
          var c = s,
            v = u,
            h = v.tag;
          if (!(v.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var m = v.alternate;
            m
              ? ((v.updateQueue = m.updateQueue),
                (v.memoizedState = m.memoizedState),
                (v.lanes = m.lanes))
              : ((v.updateQueue = null), (v.memoizedState = null));
          }
          var w = _u(o);
          if (w !== null) {
            (w.flags &= -257),
              ju(w, o, u, i, t),
              w.mode & 1 && Nu(i, c, t),
              (t = w),
              (s = c);
            var x = t.updateQueue;
            if (x === null) {
              var k = new Set();
              k.add(s), (t.updateQueue = k);
            } else x.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Nu(i, c, t), jo();
              break e;
            }
            s = Error(g(426));
          }
        } else if (V && u.mode & 1) {
          var I = _u(o);
          if (I !== null) {
            !(I.flags & 65536) && (I.flags |= 256),
              ju(I, o, u, i, t),
              oo(rn(s, u));
            break e;
          }
        }
        (i = s = rn(s, u)),
          X !== 4 && (X = 2),
          zn === null ? (zn = [i]) : zn.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var f = La(i, s, t);
              wu(i, f);
              break e;
            case 1:
              u = s;
              var a = i.type,
                d = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof a.getDerivedStateFromError == 'function' ||
                  (d !== null &&
                    typeof d.componentDidCatch == 'function' &&
                    (ut === null || !ut.has(d))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var y = za(i, u, t);
                wu(i, y);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Za(n);
    } catch (C) {
      (t = C), Y === n && n !== null && (Y = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Ka() {
  var e = Gr.current;
  return (Gr.current = Zr), e === null ? Zr : e;
}
function jo() {
  (X === 0 || X === 3 || X === 2) && (X = 4),
    J === null || (!(Pt & 268435455) && !(fl & 268435455)) || be(J, b);
}
function br(e, t) {
  var n = M;
  M |= 2;
  var r = Ka();
  (J !== e || b !== t) && ((He = null), Ct(e, t));
  do
    try {
      Nd();
      break;
    } catch (l) {
      Ya(e, l);
    }
  while (!0);
  if ((so(), (M = n), (Gr.current = r), Y !== null)) throw Error(g(261));
  return (J = null), (b = 0), X;
}
function Nd() {
  for (; Y !== null; ) Xa(Y);
}
function _d() {
  for (; Y !== null && !Gc(); ) Xa(Y);
}
function Xa(e) {
  var t = Ja(e.alternate, e, me);
  (e.memoizedProps = e.pendingProps),
    t === null ? Za(e) : (Y = t),
    (So.current = null);
}
function Za(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = wd(n, t)), n !== null)) {
        (n.flags &= 32767), (Y = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (X = 6), (Y = null);
        return;
      }
    } else if (((n = gd(n, t, me)), n !== null)) {
      Y = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Y = t;
      return;
    }
    Y = t = e;
  } while (t !== null);
  X === 0 && (X = 5);
}
function gt(e, t, n) {
  var r = R,
    l = Ce.transition;
  try {
    (Ce.transition = null), (R = 1), jd(e, t, n, r);
  } finally {
    (Ce.transition = l), (R = r);
  }
  return null;
}
function jd(e, t, n, r) {
  do Gt();
  while (tt !== null);
  if (M & 6) throw Error(g(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(g(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (uf(e, i),
    e === J && ((Y = J = null), (b = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      yr ||
      ((yr = !0),
      qa(Or, function () {
        return Gt(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Ce.transition), (Ce.transition = null);
    var o = R;
    R = 1;
    var u = M;
    (M |= 4),
      (So.current = null),
      kd(e, n),
      Wa(n, e),
      Kf(mi),
      (Fr = !!pi),
      (mi = pi = null),
      (e.current = n),
      Sd(n),
      Jc(),
      (M = u),
      (R = o),
      (Ce.transition = i);
  } else e.current = n;
  if (
    (yr && ((yr = !1), (tt = e), (qr = l)),
    (i = e.pendingLanes),
    i === 0 && (ut = null),
    ef(n.stateNode),
    pe(e, Q()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Jr) throw ((Jr = !1), (e = Oi), (Oi = null), e);
  return (
    qr & 1 && e.tag !== 0 && Gt(),
    (i = e.pendingLanes),
    i & 1 ? (e === Di ? Tn++ : ((Tn = 0), (Di = e))) : (Tn = 0),
    mt(),
    null
  );
}
function Gt() {
  if (tt !== null) {
    var e = Ls(qr),
      t = Ce.transition,
      n = R;
    try {
      if (((Ce.transition = null), (R = 16 > e ? 16 : e), tt === null))
        var r = !1;
      else {
        if (((e = tt), (tt = null), (qr = 0), M & 6)) throw Error(g(331));
        var l = M;
        for (M |= 4, S = e.current; S !== null; ) {
          var i = S,
            o = i.child;
          if (S.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (S = c; S !== null; ) {
                  var v = S;
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ln(8, v, i);
                  }
                  var h = v.child;
                  if (h !== null) (h.return = v), (S = h);
                  else
                    for (; S !== null; ) {
                      v = S;
                      var m = v.sibling,
                        w = v.return;
                      if ((Ua(v), v === c)) {
                        S = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = w), (S = m);
                        break;
                      }
                      S = w;
                    }
                }
              }
              var x = i.alternate;
              if (x !== null) {
                var k = x.child;
                if (k !== null) {
                  x.child = null;
                  do {
                    var I = k.sibling;
                    (k.sibling = null), (k = I);
                  } while (k !== null);
                }
              }
              S = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (S = o);
          else
            e: for (; S !== null; ) {
              if (((i = S), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ln(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (S = f);
                break e;
              }
              S = i.return;
            }
        }
        var a = e.current;
        for (S = a; S !== null; ) {
          o = S;
          var d = o.child;
          if (o.subtreeFlags & 2064 && d !== null) (d.return = o), (S = d);
          else
            e: for (o = a; S !== null; ) {
              if (((u = S), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      cl(9, u);
                  }
                } catch (C) {
                  A(u, u.return, C);
                }
              if (u === o) {
                S = null;
                break e;
              }
              var y = u.sibling;
              if (y !== null) {
                (y.return = u.return), (S = y);
                break e;
              }
              S = u.return;
            }
        }
        if (
          ((M = l), mt(), Ie && typeof Ie.onPostCommitFiberRoot == 'function')
        )
          try {
            Ie.onPostCommitFiberRoot(nl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (R = n), (Ce.transition = t);
    }
  }
  return !1;
}
function Uu(e, t, n) {
  (t = rn(n, t)),
    (t = La(e, t, 1)),
    (e = ot(e, t, 1)),
    (t = oe()),
    e !== null && (Gn(e, 1, t), pe(e, t));
}
function A(e, t, n) {
  if (e.tag === 3) Uu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Uu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (ut === null || !ut.has(r)))
        ) {
          (e = rn(n, e)),
            (e = za(t, e, 1)),
            (t = ot(t, e, 1)),
            (e = oe()),
            t !== null && (Gn(t, 1, e), pe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Pd(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = oe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    J === e &&
      (b & n) === n &&
      (X === 4 || (X === 3 && (b & 130023424) === b && 500 > Q() - Eo)
        ? Ct(e, 0)
        : (Co |= n)),
    pe(e, t);
}
function Ga(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ur), (ur <<= 1), !(ur & 130023424) && (ur = 4194304))
      : (t = 1));
  var n = oe();
  (e = Ye(e, t)), e !== null && (Gn(e, t, n), pe(e, n));
}
function Ld(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Ga(e, n);
}
function zd(e, t) {
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
      throw Error(g(314));
  }
  r !== null && r.delete(t), Ga(e, n);
}
var Ja;
Ja = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || fe.current) ce = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ce = !1), yd(e, t, n);
      ce = !!(e.flags & 131072);
    }
  else (ce = !1), V && t.flags & 1048576 && ta(t, Wr, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      jr(e, t), (e = t.pendingProps);
      var l = bt(t, le.current);
      Zt(t, n), (l = yo(null, t, r, e, l, n));
      var i = go();
      return (
        (t.flags |= 1),
        typeof l == 'object' &&
        l !== null &&
        typeof l.render == 'function' &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            de(r) ? ((i = !0), $r(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            fo(t),
            (l.updater = al),
            (t.stateNode = l),
            (l._reactInternals = t),
            Ci(t, r, e, n),
            (t = _i(null, t, r, !0, i, n)))
          : ((t.tag = 0), V && i && lo(t), ie(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (jr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Md(r)),
          (e = Pe(r, e)),
          l)
        ) {
          case 0:
            t = Ni(null, t, r, e, n);
            break e;
          case 1:
            t = zu(null, t, r, e, n);
            break e;
          case 11:
            t = Pu(null, t, r, e, n);
            break e;
          case 14:
            t = Lu(null, t, r, Pe(r.type, e), n);
            break e;
        }
        throw Error(g(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Pe(r, l)),
        Ni(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Pe(r, l)),
        zu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Oa(t), e === null)) throw Error(g(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          ua(e, t),
          Yr(t, r, null, n);
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
            (l = rn(Error(g(423)), t)), (t = Tu(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = rn(Error(g(424)), t)), (t = Tu(e, t, r, n, l));
            break e;
          } else
            for (
              he = it(t.stateNode.containerInfo.firstChild),
                ve = t,
                V = !0,
                ze = null,
                n = ia(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((en(), r === l)) {
            t = Ke(e, t, n);
            break e;
          }
          ie(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        sa(t),
        e === null && xi(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        hi(r, l) ? (o = null) : i !== null && hi(r, i) && (t.flags |= 32),
        Ra(e, t),
        ie(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && xi(t), null;
    case 13:
      return Da(e, t, n);
    case 4:
      return (
        po(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = tn(t, null, r, n)) : ie(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Pe(r, l)),
        Pu(e, t, r, l, n)
      );
    case 7:
      return ie(e, t, t.pendingProps, n), t.child;
    case 8:
      return ie(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ie(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          O(Br, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (Re(i.value, o)) {
            if (i.children === l.children && !fe.current) {
              t = Ke(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = We(-1, n & -n)), (s.tag = 2);
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var v = c.pending;
                        v === null
                          ? (s.next = s)
                          : ((s.next = v.next), (v.next = s)),
                          (c.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      ki(i.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(g(341));
                (o.lanes |= n),
                  (u = o.alternate),
                  u !== null && (u.lanes |= n),
                  ki(o, n, t),
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
        ie(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Zt(t, n),
        (l = Ee(l)),
        (r = r(l)),
        (t.flags |= 1),
        ie(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Pe(r, t.pendingProps)),
        (l = Pe(r.type, l)),
        Lu(e, t, r, l, n)
      );
    case 15:
      return Ta(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Pe(r, l)),
        jr(e, t),
        (t.tag = 1),
        de(r) ? ((e = !0), $r(t)) : (e = !1),
        Zt(t, n),
        Pa(t, r, l),
        Ci(t, r, l, n),
        _i(null, t, r, !0, e, n)
      );
    case 19:
      return Fa(e, t, n);
    case 22:
      return Ma(e, t, n);
  }
  throw Error(g(156, t.tag));
};
function qa(e, t) {
  return Ns(e, t);
}
function Td(e, t, n, r) {
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
function Se(e, t, n, r) {
  return new Td(e, t, n, r);
}
function Po(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Md(e) {
  if (typeof e == 'function') return Po(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Yi)) return 11;
    if (e === Ki) return 14;
  }
  return 2;
}
function at(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Se(e.tag, t, e.key, e.mode)),
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
function zr(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == 'function')) Po(e) && (o = 1);
  else if (typeof e == 'string') o = 5;
  else
    e: switch (e) {
      case Ot:
        return Et(n.children, l, i, t);
      case Qi:
        (o = 8), (l |= 8);
        break;
      case Kl:
        return (
          (e = Se(12, n, t, l | 2)), (e.elementType = Kl), (e.lanes = i), e
        );
      case Xl:
        return (e = Se(13, n, t, l)), (e.elementType = Xl), (e.lanes = i), e;
      case Zl:
        return (e = Se(19, n, t, l)), (e.elementType = Zl), (e.lanes = i), e;
      case ss:
        return dl(n, l, i, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case os:
              o = 10;
              break e;
            case us:
              o = 9;
              break e;
            case Yi:
              o = 11;
              break e;
            case Ki:
              o = 14;
              break e;
            case Ge:
              (o = 16), (r = null);
              break e;
          }
        throw Error(g(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = Se(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Et(e, t, n, r) {
  return (e = Se(7, e, r, t)), (e.lanes = n), e;
}
function dl(e, t, n, r) {
  return (
    (e = Se(22, e, r, t)),
    (e.elementType = ss),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Bl(e, t, n) {
  return (e = Se(6, e, null, t)), (e.lanes = n), e;
}
function Ql(e, t, n) {
  return (
    (t = Se(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Rd(e, t, n, r, l) {
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
    (this.eventTimes = Nl(0)),
    (this.expirationTimes = Nl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Nl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Lo(e, t, n, r, l, i, o, u, s) {
  return (
    (e = new Rd(e, t, n, u, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Se(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    fo(i),
    e
  );
}
function Od(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Rt,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function ba(e) {
  if (!e) return ft;
  e = e._reactInternals;
  e: {
    if (Tt(e) !== e || e.tag !== 1) throw Error(g(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (de(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(g(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (de(n)) return bs(e, n, t);
  }
  return t;
}
function ec(e, t, n, r, l, i, o, u, s) {
  return (
    (e = Lo(n, r, !0, e, l, i, o, u, s)),
    (e.context = ba(null)),
    (n = e.current),
    (r = oe()),
    (l = st(n)),
    (i = We(r, l)),
    (i.callback = t ?? null),
    ot(n, i, l),
    (e.current.lanes = l),
    Gn(e, l, r),
    pe(e, r),
    e
  );
}
function pl(e, t, n, r) {
  var l = t.current,
    i = oe(),
    o = st(l);
  return (
    (n = ba(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = We(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ot(l, t, o)),
    e !== null && (Me(e, l, o, i), Er(e, l, o)),
    o
  );
}
function el(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function $u(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function zo(e, t) {
  $u(e, t), (e = e.alternate) && $u(e, t);
}
function Dd() {
  return null;
}
var tc =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function To(e) {
  this._internalRoot = e;
}
ml.prototype.render = To.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(g(409));
  pl(e, t, null, null);
};
ml.prototype.unmount = To.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Lt(function () {
      pl(null, e, null, null);
    }),
      (t[Qe] = null);
  }
};
function ml(e) {
  this._internalRoot = e;
}
ml.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ms();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < qe.length && t !== 0 && t < qe[n].priority; n++);
    qe.splice(n, 0, e), n === 0 && Os(e);
  }
};
function Mo(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function hl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function Au() {}
function Fd(e, t, n, r, l) {
  if (l) {
    if (typeof r == 'function') {
      var i = r;
      r = function () {
        var c = el(o);
        i.call(c);
      };
    }
    var o = ec(t, r, e, 0, null, !1, !1, '', Au);
    return (
      (e._reactRootContainer = o),
      (e[Qe] = o.current),
      Un(e.nodeType === 8 ? e.parentNode : e),
      Lt(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == 'function') {
    var u = r;
    r = function () {
      var c = el(s);
      u.call(c);
    };
  }
  var s = Lo(e, 0, !1, null, null, !1, !1, '', Au);
  return (
    (e._reactRootContainer = s),
    (e[Qe] = s.current),
    Un(e.nodeType === 8 ? e.parentNode : e),
    Lt(function () {
      pl(t, s, n, r);
    }),
    s
  );
}
function vl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == 'function') {
      var u = l;
      l = function () {
        var s = el(o);
        u.call(s);
      };
    }
    pl(t, o, e, l);
  } else o = Fd(n, t, e, l, r);
  return el(o);
}
zs = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = kn(t.pendingLanes);
        n !== 0 &&
          (Gi(t, n | 1), pe(t, Q()), !(M & 6) && ((ln = Q() + 500), mt()));
      }
      break;
    case 13:
      Lt(function () {
        var r = Ye(e, 1);
        if (r !== null) {
          var l = oe();
          Me(r, e, 1, l);
        }
      }),
        zo(e, 1);
  }
};
Ji = function (e) {
  if (e.tag === 13) {
    var t = Ye(e, 134217728);
    if (t !== null) {
      var n = oe();
      Me(t, e, 134217728, n);
    }
    zo(e, 134217728);
  }
};
Ts = function (e) {
  if (e.tag === 13) {
    var t = st(e),
      n = Ye(e, t);
    if (n !== null) {
      var r = oe();
      Me(n, e, t, r);
    }
    zo(e, t);
  }
};
Ms = function () {
  return R;
};
Rs = function (e, t) {
  var n = R;
  try {
    return (R = e), t();
  } finally {
    R = n;
  }
};
ii = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((ql(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = ol(r);
            if (!l) throw Error(g(90));
            cs(r), ql(r, l);
          }
        }
      }
      break;
    case 'textarea':
      ds(e, n);
      break;
    case 'select':
      (t = n.value), t != null && Qt(e, !!n.multiple, t, !1);
  }
};
ws = No;
xs = Lt;
var Id = { usingClientEntryPoint: !1, Events: [qn, Vt, ol, ys, gs, No] },
  gn = {
    findFiberByHostInstance: xt,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom',
  },
  Vd = {
    bundleType: gn.bundleType,
    version: gn.version,
    rendererPackageName: gn.rendererPackageName,
    rendererConfig: gn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Xe.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Cs(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: gn.findFiberByHostInstance || Dd,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var gr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!gr.isDisabled && gr.supportsFiber)
    try {
      (nl = gr.inject(Vd)), (Ie = gr);
    } catch {}
}
ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Id;
ge.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Mo(t)) throw Error(g(200));
  return Od(e, t, null, n);
};
ge.createRoot = function (e, t) {
  if (!Mo(e)) throw Error(g(299));
  var n = !1,
    r = '',
    l = tc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Lo(e, 1, !1, null, null, n, !1, r, l)),
    (e[Qe] = t.current),
    Un(e.nodeType === 8 ? e.parentNode : e),
    new To(t)
  );
};
ge.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(g(188))
      : ((e = Object.keys(e).join(',')), Error(g(268, e)));
  return (e = Cs(t)), (e = e === null ? null : e.stateNode), e;
};
ge.flushSync = function (e) {
  return Lt(e);
};
ge.hydrate = function (e, t, n) {
  if (!hl(t)) throw Error(g(200));
  return vl(null, e, t, !0, n);
};
ge.hydrateRoot = function (e, t, n) {
  if (!Mo(e)) throw Error(g(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = '',
    o = tc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = ec(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[Qe] = t.current),
    Un(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new ml(t);
};
ge.render = function (e, t, n) {
  if (!hl(t)) throw Error(g(200));
  return vl(null, e, t, !1, n);
};
ge.unmountComponentAtNode = function (e) {
  if (!hl(e)) throw Error(g(40));
  return e._reactRootContainer
    ? (Lt(function () {
        vl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Qe] = null);
        });
      }),
      !0)
    : !1;
};
ge.unstable_batchedUpdates = No;
ge.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!hl(n)) throw Error(g(200));
  if (e == null || e._reactInternals === void 0) throw Error(g(38));
  return vl(e, t, n, !1, r);
};
ge.version = '18.3.1-next-f1338f8080-20240426';
function nc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nc);
    } catch (e) {
      console.error(e);
    }
}
nc(), (ns.exports = ge);
var Hd = ns.exports,
  rc,
  Wu = Hd;
(rc = Wu.createRoot), Wu.hydrateRoot;
const Ro = ({ children: e, ...t }) =>
    p.jsx('section', {
      ...t,
      className: `py-16 lg:py-20 ${t.className || ''}`,
      children: e,
    }),
  Ud = '/assets/cta-img-DeV7aS5u.svg',
  $d = () =>
    p.jsx(Ro, {
      id: 'cta',
      className: 'overflow-hidden',
      children: p.jsxs('div', {
        className:
          'custom-screen flex flex-col-reverse justify-between gap-x-12 md:flex-row md:items-center',
        children: [
          p.jsxs('div', {
            className: 'mt-12 max-w-xl flex-none space-y-3 md:mt-0',
            children: [
              p.jsx('h2', {
                className: 'text-3xl font-semibold text-gray-800 sm:text-4xl',
                children: 'Empowering Your Digital Presence',
              }),
              p.jsx('p', {
                className: 'text-gray-600',
                children:
                  'At Sanset Technologies, we offer innovative web app solutions designed to enhance your online presence. Our straightforward, one-time fee structure allows your app to gain visibility and engagement, and we back it with a 100% satisfaction guarantee.',
              }),
            ],
          }),
          p.jsx('div', {
            className: 'w-full flex-none md:max-w-xl',
            children: p.jsx('img', {
              src: Ud,
              alt: 'chart',
              className: 'w-full rounded-lg border shadow-lg',
            }),
          }),
        ],
      }),
    }),
  Ad = [
    {
      q: 'How does web app performance impact my business?',
      a: 'Web app performance directly influences user engagement and retention, affecting your overall success.',
    },
    {
      q: 'What are the benefits of working with Sanset Technologies?',
      a: 'We offer tailored web app development solutions to meet your unique business needs, ensuring a high-quality product that drives engagement.',
    },
    {
      q: 'What types of features can I add to my web app?',
      a: 'We provide a range of features, including user authentication, database integration, and responsive design to enhance user experience.',
    },
    {
      q: 'How can I attract users to my web app?',
      a: 'Utilizing targeted social media marketing, SEO strategies, and engaging content can significantly increase your app’s visibility.',
    },
    {
      q: 'How can Sanset Technologies enhance my web app?',
      a: 'Our expert team provides personalized support and strategies to help you create a user-friendly web app that drives growth and engagement.',
    },
    {
      q: 'What sets Sanset Technologies apart from other web app developers?',
      a: 'As a newly established company, we focus on delivering innovative and high-quality web apps tailored specifically to your business goals.',
    },
    {
      q: 'What kind of support do you offer?',
      a: 'We provide dedicated customer support to assist you with any questions or issues during the web app development process.',
    },
  ],
  Wd = () =>
    p.jsx(Ro, {
      id: 'faqs',
      children: p.jsxs('div', {
        className: 'custom-screen text-gray-600 py-8 md:py-4',
        children: [
          p.jsxs('div', {
            className: 'max-w-xl xl:mx-auto xl:text-center',
            children: [
              p.jsx('h2', {
                className: 'text-gray-800 text-3xl font-extrabold sm:text-4xl',
                children: 'Frequently Asked Questions',
              }),
              p.jsxs('p', {
                className: 'mt-3',
                children: [
                  'Get all the answers you need about our services. If you still have questions, don’t hesitate to reach out!',
                  ' ',
                  p.jsx('a', {
                    className:
                      'text-blue-600 hover:text-blue-400 duration-150 font-semibold whitespace-nowrap',
                    href: 'mailto:example@domain.com',
                    children: 'contact us',
                  }),
                  '.',
                ],
              }),
            ],
          }),
          p.jsx('div', {
            className: 'mt-12',
            children: p.jsx('ul', {
              className:
                'space-y-8 gap-12 grid-cols-2 sm:grid sm:space-y-0 lg:grid-cols-3',
              children: Ad.map((e, t) =>
                p.jsxs(
                  'li',
                  {
                    className: 'space-y-3',
                    children: [
                      p.jsx('summary', {
                        className:
                          'flex items-center justify-between font-semibold text-gray-700',
                        children: e.q,
                      }),
                      p.jsx('p', {
                        dangerouslySetInnerHTML: { __html: e.a },
                        className: 'leading-relaxed',
                      }),
                    ],
                  },
                  t
                )
              ),
            }),
          }),
        ],
      }),
    }),
  lc = ({ children: e, ...t }) =>
    p.jsxs('section', {
      ...t,
      className: `relative overflow-hidden bg-gray-900 py-28 my-16 sm:py-32 ${
        t.className || ''
      }`,
      children: [
        p.jsx('div', {
          className: 'absolute inset-0 max-w-xl mx-auto h-72 blur-[118px]',
          style: {
            background:
              'linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)',
          },
        }),
        p.jsx('div', { className: 'relative', children: e }),
      ],
    }),
  Bd = () => {
    const e = [
      {
        icon: p.jsx('svg', {
          className: 'w-6 h-6',
          viewBox: '0 0 24 24',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: p.jsx('path', {
            d: 'M19.5 14.25V11.625C19.5 9.76104 17.989 8.25 16.125 8.25H14.625C14.0037 8.25 13.5 7.74632 13.5 7.125V5.625C13.5 3.76104 11.989 2.25 10.125 2.25H8.25M8.25 15H15.75M8.25 18H12M10.5 2.25H5.625C5.00368 2.25 4.5 2.75368 4.5 3.375V20.625C4.5 21.2463 5.00368 21.75 5.625 21.75H18.375C18.9963 21.75 19.5 21.2463 19.5 20.625V11.25C19.5 6.27944 15.4706 2.25 10.5 2.25Z',
            stroke: 'currentColor',
            strokeWidth: '1.5',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          }),
        }),
        title: 'Detailed Insights at Your Fingertips',
        desc: "Receive weekly and monthly performance reports via email and Slack, keeping you informed about your app's growth and user engagement.",
      },
      {
        icon: p.jsx('svg', {
          className: 'w-6 h-6',
          viewBox: '0 0 24 24',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: p.jsx('path', {
            d: 'M3.171 12.0945V11.85C4.6785 11.697 5.4165 10.9275 5.4165 9.45V6.7545C5.4165 5.1135 6.0015 4.4475 7.4475 4.4475H7.857V3H7.293C4.875 3 3.735 4.1385 3.735 6.528V8.814C3.735 10.455 3.171 10.998 1.5 10.998V12.9465C3.171 12.9465 3.735 13.4895 3.735 15.1305V17.4165C3.735 19.806 4.8735 20.9445 7.293 20.9445H7.857V19.4985H7.4475C6.0015 19.4985 5.4165 18.8325 5.4165 17.1915V14.4945C5.4165 13.0185 4.6785 12.249 3.171 12.0945ZM20.829 11.85V12.0945C19.3215 12.249 18.5835 13.0185 18.5835 14.4945V17.1915C18.5835 18.8325 17.9985 19.4985 16.5525 19.4985H16.143V20.9445H16.707C19.1265 20.9445 20.265 19.806 20.265 17.4165V15.1305C20.265 13.4895 20.829 12.9465 22.5 12.9465V10.998C20.829 10.998 20.265 10.455 20.265 8.814V6.528C20.265 4.1385 19.125 3 16.707 3H16.143V4.446H16.5525C17.9985 4.446 18.5835 5.112 18.5835 6.753V9.45C18.5835 10.926 19.3215 11.6955 20.829 11.85Z',
            fill: 'currentColor',
          }),
        }),
        title: 'A Robust and Customizable API',
        desc: 'Leverage our flexible API to access your app’s analytics programmatically and integrate them into your existing systems seamlessly.',
      },
      {
        icon: p.jsx('svg', {
          className: 'w-6 h-6',
          viewBox: '0 0 24 24',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: p.jsx('path', {
            d: 'M20.25 6.375C20.25 8.65317 16.5563 10.5 12 10.5C7.44365 10.5 3.75 8.65317 3.75 6.375M20.25 6.375C20.25 4.09683 16.5563 2.25 12 2.25C7.44365 2.25 3.75 4.09683 3.75 6.375M20.25 6.375V17.625C20.25 19.9032 16.5563 21.75 12 21.75C7.44365 21.75 3.75 19.9032 3.75 17.625V6.375M20.25 6.375V10.125M3.75 6.375V10.125M20.25 10.125V13.875C20.25 16.1532 16.5563 18 12 18C7.44365 18 3.75 16.1532 3.75 13.875V10.125M20.25 10.125C20.25 12.4032 16.5563 14.25 12 14.25C7.44365 14.25 3.75 12.4032 3.75 10.125',
            stroke: 'currentColor',
            strokeWidth: '1.5',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          }),
        }),
        title: 'Control Your Data with Confidence',
        desc: "We prioritize your privacy and guarantee that your app's data will remain confidential—never shared or sold to third parties.",
      },
      {
        icon: p.jsx('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          className: 'h-6 w-6',
          fill: 'none',
          viewBox: '0 0 24 24',
          stroke: 'currentColor',
          strokeWidth: 2,
          children: p.jsx('path', {
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            d: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
          }),
        }),
        title: 'Optimize Your Marketing Efforts',
        desc: 'We assist you in analyzing the effectiveness of your marketing campaigns, providing insights to refine your strategy.',
      },
    ];
    return p.jsx(lc, {
      id: 'features',
      children: p.jsxs('div', {
        className: 'custom-screen text-gray-300 justify-between gap-24 lg:flex',
        children: [
          p.jsxs('div', {
            className: 'max-w-xl',
            children: [
              p.jsx('h2', {
                className: 'text-white text-3xl font-semibold sm:text-4xl',
                children: 'Amplify Your Reach with Smart Solutions',
              }),
              p.jsx('p', {
                className: 'mt-3',
                children:
                  'Our revolutionary approach to web app development ensures your project gets the attention it deserves. We provide tailored packages to meet your specific needs.',
              }),
            ],
          }),
          p.jsx('div', {
            className: 'mt-12 lg:mt-0',
            children: p.jsx('ul', {
              className: 'grid gap-8 sm:grid-cols-2',
              children: e.map((t, n) =>
                p.jsxs(
                  'li',
                  {
                    className: 'flex gap-x-4',
                    children: [
                      p.jsx('div', {
                        className:
                          'flex-none w-12 h-12 bg-gray-700 text-cyan-400 rounded-lg flex items-center justify-center',
                        children: t.icon,
                      }),
                      p.jsxs('div', {
                        children: [
                          p.jsx('h4', {
                            className: 'text-lg text-gray-100 font-semibold',
                            children: t.title,
                          }),
                          p.jsx('p', { className: 'mt-3', children: t.desc }),
                        ],
                      }),
                    ],
                  },
                  n
                )
              ),
            }),
          }),
        ],
      }),
    });
  },
  Qd = () =>
    p.jsx(lc, {
      children: p.jsxs('div', {
        className:
          'custom-screen flex flex-col gap-x-12 justify-center items-center',
        children: [
          p.jsx('h2', {
            className: 'text-white text-3xl font-semibold sm:text-4xl',
            children: 'Grow Your Online Business in Just a Few Steps',
          }),
          p.jsx('p', {
            className: 'mt-3 text-gray-300',
            children:
              'We empower you to quickly scale your online business using the most effective tools available.',
          }),
        ],
      }),
    });
var ic = { exports: {} },
  Yd = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  Kd = Yd,
  Xd = Kd;
function oc() {}
function uc() {}
uc.resetWarningCache = oc;
var Zd = function () {
  function e(r, l, i, o, u, s) {
    if (s !== Xd) {
      var c = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
      );
      throw ((c.name = 'Invariant Violation'), c);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: uc,
    resetWarningCache: oc,
  };
  return (n.PropTypes = n), n;
};
ic.exports = Zd();
var Gd = ic.exports;
const Jt = dc(Gd),
  sc = ({ children: e, wrapperClassName: t, className: n, ...r }) =>
    p.jsxs('div', {
      ...r,
      className: `relative py-28 ${n || ''}`,
      children: [
        p.jsx('div', {
          className: `absolute top-12 m-auto h-[250px] max-w-3xl blur-[130px] ${
            t || ''
          }`,
          style: {
            background:
              'linear-gradient(108.49deg, rgba(152, 103, 240, 0.24) 23.1%, rgba(237, 78, 80, 0.06) 62.53%)',
          },
        }),
        p.jsx('div', { className: 'relative', children: e }),
      ],
    });
sc.propTypes = {
  wrapperClassName: Jt.string,
  children: Jt.node.isRequired,
  className: Jt.string,
};
const ac = ({ children: e, href: t, ...n }) =>
  p.jsx('a', {
    href: t,
    ...n,
    className: `rounded-full px-4 py-2.5 text-center duration-150 ${
      (n == null ? void 0 : n.className) || ''
    }`,
    children: e,
  });
ac.propTypes = {
  children: Jt.node.isRequired,
  href: Jt.string.isRequired,
  className: Jt.string,
};
const Jd = () =>
    p.jsx('section', {
      children: p.jsx(sc, {
        wrapperClassName: 'inset-0',
        className: 'custom-screen text-gray-600',
        children: p.jsxs('div', {
          className: 'mx-auto mt-20 max-w-4xl space-y-5 text-center',
          children: [
            p.jsxs('h1', {
              className:
                'mx-auto text-4xl font-extrabold text-gray-800 sm:text-6xl',
              children: [
                'Accelerate Your',
                ' ',
                p.jsxs('span', {
                  className:
                    ' bg-gradient-to-r from-[#9867F0] to-[#ED4E50] bg-clip-text text-transparent',
                  children: ['Web App Development', ' '],
                }),
                'Journey',
              ],
            }),
            p.jsx('p', {
              className: 'mx-auto max-w-xl',
              children:
                'Unlock the ultimate potential of your web app with our cutting-edge solutions. Join today!',
            }),
            p.jsx('div', {
              className:
                'flex items-center justify-center gap-x-3 text-sm font-medium',
              children: p.jsxs(ac, {
                href: '#cta',
                className:
                  'flex items-center gap-x-2 text-gray-700 hover:text-gray-900',
                children: [
                  'Learn more',
                  p.jsx('svg', {
                    xmlns: 'http://www.w3.org/2000/svg',
                    viewBox: '0 0 20 20',
                    fill: 'currentColor',
                    className: 'h-5 w-5',
                    children: p.jsx('path', {
                      fillRule: 'evenodd',
                      d: 'M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z',
                      clipRule: 'evenodd',
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    }),
  qd =
    "data:image/svg+xml,%3csvg%20width='100'%20height='36'%20viewBox='0%200%20100%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M25.5423%2028.9963L21.9303%2018.0065L31.3815%2011.2156H19.6938L16.0818%200.221191H27.7705L31.3861%2011.2147C33.4797%2017.5888%2031.3202%2024.8422%2025.5249%2028.9945L25.5423%2028.9963ZM6.63419%2028.9963L16.0855%2035.7917L25.5423%2028.9963L16.091%2022.2055L6.63419%2028.9963ZM0.791244%2011.2111C-1.41864%2017.9359%201.14658%2025.0583%206.63144%2028.9991V28.9963L10.2434%2018.0065L0.792159%2011.2111L12.4781%2011.2147L16.0818%200.221191H4.38676L0.791244%2011.2111Z'%20fill='%23EB5424'/%3e%3cpath%20d='M93.6743%208.80704C91.7914%208.80704%2090.1988%209.68623%2089.0677%2011.3457C87.9458%2012.9969%2087.3487%2015.3002%2087.3487%2018.0065C87.3487%2020.7127%2087.9413%2023.016%2089.0677%2024.6672C90.1978%2026.3276%2091.7914%2027.2059%2093.6743%2027.2059C95.5572%2027.2059%2097.1498%2026.3267%2098.2809%2024.6672C99.4028%2023.016%2099.9999%2020.7127%2099.9999%2018.0065C99.9999%2015.3002%2099.4073%2012.9969%2098.2809%2011.3457C97.1508%209.68531%2095.5581%208.80704%2093.6743%208.80704ZM93.6743%2024.9191C92.775%2024.9191%2092.0606%2024.4154%2091.4974%2023.3769C90.8169%2022.1249%2090.4424%2020.2173%2090.4424%2017.9973C90.4424%2015.7774%2090.816%2013.8706%2091.4974%2012.6178C92.0606%2011.5801%2092.7795%2011.0755%2093.6743%2011.0755C94.5691%2011.0755%2095.288%2011.5792%2095.8512%2012.6178C96.5317%2013.8697%2096.9062%2015.7774%2096.9062%2017.9973C96.9062%2020.2173%2096.5326%2022.124%2095.8512%2023.3769C95.2834%2024.4191%2094.5736%2024.9191%2093.6743%2024.9191ZM52.8515%2015.5063V23.4153C52.8515%2025.4997%2054.5659%2027.1977%2056.676%2027.1977C58.5076%2027.1977%2059.9089%2026.2937%2060.4162%2025.9155C60.4455%2025.8944%2060.4831%2025.8862%2060.5078%2025.899C60.5325%2025.9118%2060.5664%2025.9357%2060.5792%2025.9705L60.886%2026.9705H63.182V15.5063H60.2532V24.071C60.2532%2024.1132%2060.2321%2024.1471%2060.1946%2024.1681C59.6451%2024.4493%2058.5461%2024.9191%2057.4673%2024.9191C56.5386%2024.9191%2055.7822%2024.1709%2055.7822%2023.255V15.5072L52.8515%2015.5063ZM82.1807%2026.9541H85.1095V19.045C85.1095%2016.9606%2083.3951%2015.2627%2081.2851%2015.2627C79.7346%2015.2627%2078.4863%2015.9221%2077.8809%2016.3177C77.8642%2016.3287%2077.8448%2016.335%2077.8248%2016.3358C77.8048%2016.3366%2077.7849%2016.3319%2077.7674%2016.3223C77.7497%2016.3129%2077.7349%2016.299%2077.7246%2016.2819C77.7143%2016.2648%2077.7088%2016.2452%2077.7088%2016.2252V9.03874H74.78V26.9577H77.7088V18.3893C77.7088%2018.3472%2077.7298%2018.3133%2077.7674%2018.2922C78.3169%2018.0111%2079.4159%2017.5412%2080.4947%2017.5412C80.9526%2017.5412%2081.3684%2017.7134%2081.6853%2018.0285C82.0021%2018.3435%2082.1771%2018.7593%2082.1771%2019.2053L82.1807%2026.9541ZM65.2911%2017.7958H67.0733C67.1319%2017.7958%2067.1832%2017.8462%2067.1832%2017.9057V24.2093C67.1832%2025.8651%2068.5451%2027.2132%2070.2219%2027.2132C70.8309%2027.2132%2071.4281%2027.1253%2072.0041%2026.9568V24.8889L71.0077%2024.9347C70.5132%2024.9347%2070.1129%2024.5354%2070.1129%2024.0482V17.9002C70.1129%2017.8416%2070.1633%2017.7903%2070.2228%2017.7903H72.005V15.5063H70.2228C70.1642%2015.5063%2070.1129%2015.4559%2070.1129%2015.3964V11.614H67.1841V15.3964C67.1841%2015.455%2067.1338%2015.5063%2067.0742%2015.5063H65.2921L65.2911%2017.7958ZM48.1625%2026.9614H51.2095L46.5754%2010.9839C46.2054%209.7018%2045.0039%208.80704%2043.6448%208.80704C42.2857%208.80704%2041.0942%209.7018%2040.7141%2010.9839L36.0801%2026.9614H39.127L40.4678%2022.3346C40.4806%2022.2889%2040.5227%2022.255%2040.5731%2022.255H46.6972C46.721%2022.255%2046.7442%2022.2629%2046.7632%2022.2772C46.7822%2022.2916%2046.796%2022.3117%2046.8025%2022.3346L48.1625%2026.9614ZM45.9902%2019.981H41.3213C41.2874%2019.981%2041.2545%2019.9645%2041.2334%2019.9389C41.2123%2019.9132%2041.2078%2019.8747%2041.2169%2019.8473L43.5523%2011.788C43.5651%2011.7422%2043.6072%2011.7084%2043.6576%2011.7084C43.6814%2011.7084%2043.7046%2011.7162%2043.7236%2011.7306C43.7425%2011.745%2043.7564%2011.7651%2043.7629%2011.788L46.0983%2019.8473C46.1074%2019.8812%2046.1028%2019.9141%2046.0818%2019.9389C46.0607%2019.9636%2046.0314%2019.981%2045.9975%2019.981H45.9902Z'%20fill='%2321264C'/%3e%3c/svg%3e",
  bd = [{ src: qd, alt: 'AltWalk' }],
  e0 = () =>
    p.jsx(Ro, {
      children: p.jsxs('div', {
        className: 'custom-screen py-10',
        children: [
          p.jsx('h2', {
            className: 'text-center text-sm font-semibold text-gray-800',
            children: 'Trusted by the',
          }),
          p.jsx('div', {
            className: 'mt-8 flex justify-center',
            children: p.jsx('ul', {
              className: 'flex items-center justify-center',
              children: bd.map((e, t) =>
                p.jsx(
                  'li',
                  { children: p.jsx('img', { src: e.src, alt: e.alt }) },
                  t
                )
              ),
            }),
          }),
        ],
      }),
    }),
  t0 = '/assets/logo-2fNy1fMU.svg',
  cc = ({ ...e }) =>
    p.jsxs('div', {
      className: 'flex items-center gap-4',
      children: [
        p.jsx('img', {
          src: t0,
          alt: 'Sanset Technologies',
          ...e,
          width: 24,
          height: 48,
        }),
        p.jsx('span', {
          className: 'text-lg font-bold',
          children: 'Sanset Technologies',
        }),
      ],
    }),
  Bu = ({ onClick: e, state: t, menuBtnEl: n }) =>
    p.jsxs('div', {
      className: 'flex items-center justify-between py-5 md:block',
      children: [
        p.jsx('a', { href: '/', children: p.jsx(cc, {}) }),
        p.jsx('div', {
          className: 'md:hidden',
          children: p.jsx('button', {
            role: 'button',
            'aria-label': 'Open the menu',
            ref: n || null,
            className: 'text-gray-500 hover:text-gray-800',
            onClick: e,
            children: t
              ? p.jsx('svg', {
                  xmlns: 'http://www.w3.org/2000/svg',
                  className: 'h-6 w-6',
                  viewBox: '0 0 20 20',
                  fill: 'currentColor',
                  children: p.jsx('path', {
                    fillRule: 'evenodd',
                    d: 'M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z',
                    clipRule: 'evenodd',
                  }),
                })
              : p.jsx('svg', {
                  xmlns: 'http://www.w3.org/2000/svg',
                  fill: 'none',
                  viewBox: '0 0 24 24',
                  strokeWidth: 1.5,
                  stroke: 'currentColor',
                  className: 'h-6 w-6',
                  children: p.jsx('path', {
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    d: 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5',
                  }),
                }),
          }),
        }),
      ],
    }),
  n0 = () => {
    const [e, t] = wt.useState(!1),
      n = wt.useRef(null),
      r = wt.useRef(null);
    wt.useEffect(() => {
      const i = (o) => {
        r.current &&
          !r.current.contains(o.target) &&
          !n.current.contains(o.target) &&
          t(!1);
      };
      return (
        document.addEventListener('mousedown', i),
        () => {
          document.removeEventListener('mousedown', i);
        }
      );
    }, []);
    const l = [
      { name: 'Features', href: '#features' },
      { name: 'FAQs', href: '#faqs' },
    ];
    return p.jsxs('header', {
      className: 'fixed left-0 right-0 top-0 z-30 m-2',
      children: [
        p.jsx('nav', {
          className: `custom-screen md:hidden ${e ? 'hidden' : ''}`,
          children: p.jsx(Bu, { menuBtnEl: n, state: e, onClick: () => t(!e) }),
        }),
        p.jsx('nav', {
          ref: r,
          className: `mx-auto max-w-7xl md:static ${
            e
              ? 'absolute inset-x-4 top-2 z-20 rounded-xl border shadow-lg'
              : 'mx-4 hidden md:block'
          }`,
          children: p.jsxs('div', {
            className: 'custom-screen items-center gap-x-20 md:flex',
            children: [
              p.jsx(Bu, { state: e, onClick: () => t(!e) }),
              p.jsx('div', {
                className: `mb-3 mt-2 flex-1 items-end justify-end text-gray-600 md:my-0 md:flex md:font-medium ${
                  e ? 'block' : 'hidden'
                } `,
                children: p.jsx('ul', {
                  className:
                    'items-center justify-center space-y-6 md:flex md:space-x-6 md:space-y-0',
                  children: l.map((i, o) =>
                    p.jsx(
                      'li',
                      {
                        className: 'hover:text-gray-900',
                        children: p.jsx('a', {
                          href: i.href,
                          className: 'block',
                          onClick: () => t(!1),
                          children: i.name,
                        }),
                      },
                      o
                    )
                  ),
                }),
              }),
            ],
          }),
        }),
      ],
    });
  },
  r0 = ({ children: e, ...t }) =>
    p.jsx('button', {
      role: 'button',
      ...t,
      className: `${
        t.className || ''
      } px-4 py-2.5 font-medium text-sm text-center duration-150`,
      children: e,
    }),
  l0 = ({ ...e }) =>
    p.jsx('input', {
      ...e,
      className: `${
        e.className || ''
      } w-full px-3 py-2 bg-white text-gray-500 bg-transparent outline-none border shadow-sm rounded-lg duration-150`,
    }),
  i0 = () =>
    p.jsxs('div', {
      className: 'mt-6 md:mt-0',
      children: [
        p.jsx('h2', {
          className: 'text-gray-800 text-xl font-semibold sm:text-2xl',
          children: 'Sign up for our newsletter.',
        }),
        p.jsxs('form', {
          onSubmit: (e) => e.preventDefault(),
          className: 'mt-6 flex items-center gap-x-3',
          children: [
            p.jsxs('div', {
              className: 'relative',
              children: [
                p.jsx('svg', {
                  className:
                    'w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto',
                  xmlns: 'http://www.w3.org/2000/svg',
                  fill: 'none',
                  viewBox: '0 0 24 24',
                  strokeWidth: 1.5,
                  stroke: 'currentColor',
                  children: p.jsx('path', {
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    d: 'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75',
                  }),
                }),
                p.jsx(l0, {
                  type: 'email',
                  required: !0,
                  placeholder: 'Enter your email',
                  className: 'w-full pl-12 pr-3 focus:border-blue-600',
                }),
              ],
            }),
            p.jsx(r0, {
              className:
                'block w-auto text-white bg-blue-600 hover:bg-blue-500 ring-offset-2 ring-blue-600 focus:ring shadow rounded-lg',
              children: 'Subscribe',
            }),
          ],
        }),
      ],
    }),
  o0 = [
    { name: 'Features', href: '#features' },
    { name: 'FAQs', href: '#faqs' },
  ],
  u0 = () => {
    const e = new Date().getFullYear();
    return p.jsx('footer', {
      className: 'pt-2 sm:pt-12',
      children: p.jsxs('div', {
        className: 'custom-screen text-gray-600',
        children: [
          p.jsxs('div', {
            className: 'flex flex-wrap items-center justify-between gap-y-10',
            children: [
              p.jsxs('div', {
                className: 'space-y-4',
                children: [
                  p.jsx('a', {
                    href: '/',
                    className: 'inline-block',
                    children: p.jsx(cc, {}),
                  }),
                  p.jsx('h2', {
                    className:
                      'text-lg font-semibold text-gray-800 sm:text-2xl',
                    children: 'Your Go-To Web App Development Partner',
                  }),
                  p.jsx('p', {
                    className: 'max-w-md',
                    children:
                      'We help businesses around the globe implement the best strategies to enhance their digital solutions.',
                  }),
                  p.jsxs('div', {
                    className: 'flex items-center gap-x-6 pt-2 text-gray-400',
                    children: [
                      p.jsx('a', {
                        href: '/',
                        target: '_blank',
                        'aria-label': 'Social media',
                        children: p.jsxs('svg', {
                          className: 'h-6 w-6 duration-150 hover:text-gray-500',
                          fill: 'none',
                          viewBox: '0 0 48 48',
                          children: [
                            p.jsx('g', {
                              clipPath: 'url(#a)',
                              children: p.jsx('path', {
                                fill: 'currentColor',
                                d: 'M48 24C48 10.745 37.255 0 24 0S0 10.745 0 24c0 11.979 8.776 21.908 20.25 23.708v-16.77h-6.094V24h6.094v-5.288c0-6.014 3.583-9.337 9.065-9.337 2.625 0 5.372.469 5.372.469v5.906h-3.026c-2.981 0-3.911 1.85-3.911 3.75V24h6.656l-1.064 6.938H27.75v16.77C39.224 45.908 48 35.978 48 24z',
                              }),
                            }),
                            p.jsx('defs', {
                              children: p.jsx('clipPath', {
                                id: 'a',
                                children: p.jsx('path', {
                                  fill: '#fff',
                                  d: 'M0 0h48v48H0z',
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                      p.jsx('a', {
                        href: '/',
                        target: '_blank',
                        'aria-label': 'Social media',
                        children: p.jsxs('svg', {
                          className: 'h-6 w-6 duration-150 hover:text-gray-500',
                          fill: 'none',
                          viewBox: '0 0 48 48',
                          children: [
                            p.jsx('g', {
                              clipPath: 'url(#clip0_17_80)',
                              children: p.jsx('path', {
                                fill: 'currentColor',
                                d: 'M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z',
                              }),
                            }),
                            p.jsx('defs', {
                              children: p.jsx('clipPath', {
                                id: 'clip0_17_80',
                                children: p.jsx('path', {
                                  fill: '#fff',
                                  d: 'M0 0h48v48H0z',
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                      p.jsx('a', {
                        href: '/',
                        target: '_blank',
                        'aria-label': 'Social media',
                        children: p.jsxs('svg', {
                          className: 'h-6 w-6 duration-150 hover:text-gray-500',
                          fill: 'none',
                          viewBox: '0 0 28 28',
                          children: [
                            p.jsx('g', {
                              clipPath: 'url(#clip0_1274_2978)',
                              children: p.jsx('path', {
                                fill: 'currentColor',
                                d: 'M25.927 0H2.067C.924 0 0 .902 0 2.018v23.959C0 27.092.924 28 2.067 28h23.86C27.07 28 28 27.092 28 25.982V2.018C28 .902 27.07 0 25.927 0zM8.307 23.86H4.151V10.495h4.156V23.86zM6.229 8.673a2.407 2.407 0 110-4.812 2.406 2.406 0 010 4.812zM23.86 23.86h-4.15v-6.497c0-1.547-.028-3.543-2.16-3.543-2.16 0-2.49 1.69-2.49 3.434v6.606h-4.144V10.495h3.98v1.826h.056c.552-1.05 1.908-2.16 3.926-2.16 4.206 0 4.982 2.767 4.982 6.366v7.333z',
                              }),
                            }),
                            p.jsx('defs', {
                              children: p.jsx('clipPath', {
                                id: 'clip0_1274_2978',
                                children: p.jsx('path', {
                                  fill: '#fff',
                                  d: 'M0 0h28v28H0z',
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              p.jsx(i0, {}),
            ],
          }),
          p.jsxs('div', {
            className:
              'mt-10 flex-row-reverse items-center justify-between border-t py-10 sm:flex',
            children: [
              p.jsx('ul', {
                className: 'flex flex-wrap items-center gap-4 sm:text-sm',
                children: o0.map((t, n) =>
                  p.jsx(
                    'li',
                    {
                      className:
                        'font-medium text-gray-700 duration-150 hover:text-gray-900',
                      children: p.jsx('a', { href: t.href, children: t.name }),
                    },
                    n
                  )
                ),
              }),
              p.jsxs('p', {
                className: 'mt-6 sm:mt-0',
                children: [
                  '© ',
                  e,
                  ' Sanset Technologies. All rights reserved.',
                ],
              }),
            ],
          }),
        ],
      }),
    });
  };
function s0() {
  return p.jsxs(p.Fragment, {
    children: [
      p.jsx(n0, {}),
      p.jsx(Jd, {}),
      p.jsx(e0, {}),
      p.jsx($d, {}),
      p.jsx(Bd, {}),
      p.jsx(Wd, {}),
      p.jsx(Qd, {}),
      p.jsx(u0, {}),
    ],
  });
}
rc(document.getElementById('root')).render(
  p.jsx(wt.StrictMode, { children: p.jsx(s0, {}) })
);

