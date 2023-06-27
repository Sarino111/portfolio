// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"jomVm":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "47b51227f668f8a2";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"4E6dT":[function(require,module,exports) {
// classes
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _helpFunctions = require("./classes/helpFunctions");
var _helpFunctionsDefault = parcelHelpers.interopDefault(_helpFunctions);
var _animation = require("./classes/animation");
var _animationDefault = parcelHelpers.interopDefault(_animation);
var _scrollingJs = require("./classes/Scrolling.js");
var _scrollingJsDefault = parcelHelpers.interopDefault(_scrollingJs);
var _navBtn = require("./classes/NavBtn");
var _navBtnDefault = parcelHelpers.interopDefault(_navBtn);
const body = document.querySelector("body");
const menuTop = document.querySelector(".menu-top");
const menuTopSide = document.querySelector(".menu-side");
const checkBox = document.getElementById("active");
const label = document.querySelector(".menu-btn");
const listSide = document.querySelector(".na-list-side");
const btnMenu = document.querySelector(".btn-menu");
const functions = new (0, _helpFunctionsDefault.default)();
const animation = new (0, _animationDefault.default)();
const scrolling = new (0, _scrollingJsDefault.default)();
const navBtn = new (0, _navBtnDefault.default)();
const mobileWidth = 770;
const mobileHeight = 627;
let debounceTimer;
let canScroll = true;
// set name of currentpage to app
scrolling.setSectionId();
// set 'current' to current section
scrolling.setCurrentSection();
// fill actual button
scrolling.fillButton();
// If resize window, fit the page
window.addEventListener("resize", ()=>{
    debounceTimer = setTimeout(()=>{
        scrolling.resize();
    }, 500);
});
function appVersion() {
    if (window.innerWidth > mobileWidth && window.innerHeight > mobileHeight) return true;
    else return false;
}
// scroll to next page
document.addEventListener("wheel", (event)=>{
    if (!canScroll) return;
    if (appVersion()) {
        canScroll = false;
        setTimeout(()=>{
            canScroll = true;
        }, 1000);
        const scrollDir = scrolling.getScrolldir(event);
        scrolling.getScroll(scrollDir);
        scrolling.setSectionId();
        scrolling.fillButton();
        checkBox.checked = false;
    }
});
// if scroll change top menu at side menu
document.addEventListener("scroll", (event)=>{
    event.preventDefault();
    let positionY = window.scrollY;
    let positionYround = Math.round(window.scrollY + 1);
    // Rotate home button
    if (positionY > 50) // rotate home button
    functions.addClass(navBtn.homeBtn, "btn-rotate");
    else // removeClass( rotate home button );
    functions.removeClass(navBtn.homeBtn, "btn-rotate");
    if (appVersion()) {
        if (positionY > 50) {
            // animate 'menu top' out from screeen
            functions.addClass(menuTop, "animation-out");
            // unhide menu top button
            functions.removeClass(menuTopSide);
            // unhide with animation menu top side button
            animation.animationMenu();
        } else {
            // unhide menu top ( remove class hidden )
            functions.removeClass(menuTop);
            // remove class for animation
            functions.removeClass(menuTop, "animation-out");
            // animate 'menu top' in to screeen
            functions.addClass(menuTop, "animation-in");
            // hide menu top side ( add class hidden ) 
            functions.addClass(menuTopSide);
            // unhide with animation menu top side button
            animation.removeAnimationMenu();
        }
        // Animation top menu 
        if (positionYround >= scrolling.sections[1].offsetTop) {
            // hide menuTop for pc 
            functions.addClass(menuTop);
            functions.removeClass(menuTopSide, "animation-out");
        } else functions.addClass(menuTopSide, "animation-out");
    }
    // fill skills charts when scroll on page with them
    animation.chartAnimation();
});
// hide side menu if click outside. 
document.addEventListener("click", (event)=>{
    var target = event.target.parentNode;
    hideMenu(target);
});
// hide menu if click outside. 
function hideMenu(target) {
    let checked = checkBox.checked;
    if (!(target == btnMenu || target == label || target == menuTopSide || target == listSide)) {
        if (checked == true) checkBox.checked = false;
    }
}
// Scroll acc. nav. button click
navBtn.mergeBtn().map((button)=>{
    button.addEventListener("click", (event)=>{
        event.preventDefault();
        let eleBtn = event.target;
        scrolling.btnScroll(eleBtn);
    });
});
const fillerLeft = document.querySelector(".filler1");
const fillerRight = document.querySelector(".filler2");
const footer = document.querySelector(".section-footer");
// liquid side menu
window.addEventListener("scroll", (event)=>{
    event.preventDefault();
    // let height = ( (body.offsetHeight * scrolling.sections.length) - window.innerHeight) / 100;
    let height = (body.offsetHeight - window.innerHeight) / 100;
    let actPosition = body.getBoundingClientRect().top;
    let lengthFill = fillerLeft.getTotalLength();
    let res = Math.floor(actPosition / height);
    // let newDashOffset = (575 + ( ( ( 575 - 315 ) / 100 ) * res ))
    let newDashOffset = 599 + 3.09 * res;
    fillerLeft.style.strokeDashoffset = newDashOffset;
    fillerRight.style.strokeDashoffset = newDashOffset;
});
const sideMenuSvg = document.querySelector(".sideMenu");
const sideMenu = document.querySelector(".menu-side");
if (window.innerWidth < 400) {
    functions.addClass(sideMenuSvg, "hidden");
    functions.addClass(menuTop, "hidden");
    functions.removeClass(sideMenu, "hidden");
}
// Toogle close and menu icons
function toogleIcon(elem, name) {
    let classes = elem.classList;
    classes.toggle(name);
}

},{"./classes/helpFunctions":"4avXj","./classes/animation":"ejot5","./classes/Scrolling.js":"c3myK","./classes/NavBtn":"2xRyB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4avXj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class HelpFunctions {
    constructor(){}
    // Funkcia na pridanie classu
    addClass(name, clas = "hidden") {
        return name.classList.add(clas);
    }
    // Funkcia na odobranie classu
    removeClass(name, clas = "hidden") {
        name.classList.remove(clas);
    }
}
exports.default = HelpFunctions;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"ejot5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _helpFunctions = require("./helpFunctions");
var _helpFunctionsDefault = parcelHelpers.interopDefault(_helpFunctions);
class Animation {
    constructor(){
        this.function = new (0, _helpFunctionsDefault.default)();
        this.menuLines = document.querySelectorAll(".menu-line");
        this.sectionThird = document.querySelector(".section-third");
        this.progressBars = document.querySelectorAll(".progress-bar");
        this.skills = document.querySelector(".skills");
    }
    // add class for animation top menu button
    animationMenu() {
        this.function.addClass(this.menuLines[0], "first-line");
        this.function.addClass(this.menuLines[1], "middle-line");
        this.function.addClass(this.menuLines[2], "last-line");
    }
    // remove class for stop animation top menu button
    removeAnimationMenu() {
        this.function.removeClass(this.menuLines[0], "first-line");
        this.function.removeClass(this.menuLines[1], "middle-line");
        this.function.removeClass(this.menuLines[2], "last-line");
    }
    // fill charts when scroll on page with them
    chartAnimation() {
        let findClass = this.sectionThird.classList.contains("current");
        if (findClass == true || window.scrollY + window.innerHeight > this.sectionThird.offsetTop) for (let bar of this.progressBars)this.function.addClass(bar, "active-bar");
    }
}
exports.default = Animation;

},{"./helpFunctions":"4avXj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c3myK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _helpFunctions = require("./helpFunctions");
var _helpFunctionsDefault = parcelHelpers.interopDefault(_helpFunctions);
class Scrolling {
    constructor(){
        this.functions = new (0, _helpFunctionsDefault.default)();
        this.sections = document.querySelectorAll(".section");
        this.sectionContainer = document.querySelector(".sections");
        this.app = document.querySelector("#app");
        this.buttons = document.querySelectorAll(".btn-liquid");
        this.sectionCur = document.getElementsByClassName("current");
        this.currentSection = this.getSection();
        this.nextSection = 0;
        this.currentSecKey = this.getSectionDataId() - 1;
    }
    ////////////////////////////////////////////////////////////
    /**
     *      Handle section
     */ ////////////////////////////////////////////////////////////
    // Get actual section
    getSection() {
        for (const section of this.sections){
            let sectionOffsetTop = parseInt(section.offsetTop);
            let docElemScrollTop = parseInt(document.documentElement.scrollTop);
            this.functions.removeClass(section, "current");
            if (Math.abs(sectionOffsetTop) == docElemScrollTop) {
                this.functions.addClass(section, "current");
                return section;
            } else for(let i = 0; i < this.sections.length; i++){
                let firstOffset = 0;
                let lastSection = this.sections.length - 1;
                let j = i !== lastSection ? i++ : i;
                // If scroll position is bigger as 0 but smaller as next page return section
                if (docElemScrollTop > firstOffset && docElemScrollTop < this.sections[j].offsetHeight * (i + 1)) return this.sections[i];
            }
        }
    }
    // Add class 'current' at actual section
    setCurrentSection() {
        let section = this.currentSection ? this.currentSection : sections[0];
        this.functions.addClass(section, "current");
    }
    // Get id of current section
    getSectionId(nextSection = this.nextSection !== 0 ? this.nextSection : this.currentSection) {
        let id = nextSection.getAttribute("id");
        return id;
    }
    // Get dataset-id of actual section
    getSectionDataId(currentSection = this.getSection()) {
        let sectionId = currentSection.dataset.section;
        return sectionId;
    }
    // Add name of current section to dataset app
    setSectionId(element = this.getSectionId()) {
        this.app.dataset.currentSection = element;
    }
    ////////////////////////////////////////////////////////////
    /**
     *      Handle scroll
     */ ////////////////////////////////////////////////////////////
    // Find out scroll direction (up or down)
    getScrolldir(event) {
        let scroll = event.deltaY;
        // Find out if direction is down
        if (scroll > 1) return "down";
        return "up";
    }
    // Scroll acc. button
    btnScroll(eleBtn) {
        let btnAttr = eleBtn.parentNode.getAttribute("href") ? eleBtn.parentNode.getAttribute("href") : eleBtn.getAttribute("href");
        let currSection = this.currentSection;
        for (let section of this.sections){
            let secAttr = section.getAttribute("id");
            let getOffset = section.offsetTop;
            if (btnAttr == "#" + secAttr) {
                scrollTo(0, getOffset);
                this.classToSection(section, currSection);
                this.fillButton(section);
                this.currentSection = section;
                this.currentSecKey = this.getSectionDataId(this.currentSection) - 1;
            }
        }
    }
    // Scroll acc. wheel. Down or up
    getScroll(scrollDir = false, sectionKey = this.currentSecKey) {
        let secLength = this.sections.length - 1;
        // If scroll down, move on next page
        if (scrollDir == "down" && sectionKey < this.sections.length) {
            sectionKey < secLength ? this.currentSecKey++ : secLength;
            let nextSectionKey = this.currentSecKey;
            let nextEl = this.sections[nextSectionKey];
            let nextOffset = nextEl.offsetTop;
            this.nextSection = this.sections[nextSectionKey];
            this.classNextSection(this.sections, nextSectionKey);
            this.movePage(0, nextOffset);
        // this.sectionContainer.style.top = ( (nextSectionKeytion - Number(1)) * -100) + 'vh';
        } else {
            sectionKey > 0 ? this.currentSecKey-- : sectionKey;
            let nextSectionKey = this.currentSecKey;
            let nextEl = this.sections[nextSectionKey];
            let nextOffset = nextEl.offsetTop;
            this.nextSection = this.sections[nextSectionKey];
            this.classPreviousSection(this.sections, nextSectionKey);
            this.movePage(0, nextOffset);
        // this.sectionContainer.style.top = (nextSection * -100) + 'vh';
        }
    }
    // If resize window, fit the page
    resize() {
        for (const section of this.sections)if (section.classList.contains("current")) this.movePage(0, section.Offset);
    }
    // Scroll acc x, y
    movePage(x, y) {
        return scrollTo(x, y);
    }
    // Add class 'current' to next section and remove from actual section
    classToSection(nextSection, currentSection) {
        this.functions.removeClass(currentSection, "current");
        this.functions.addClass(nextSection, "current");
    }
    classNextSection(section, key) {
        this.functions.removeClass(section[key - 1], "current");
        this.functions.addClass(section[key], "current");
    }
    classPreviousSection(section, key) {
        this.functions.removeClass(section[key + 1], "current");
        this.functions.addClass(section[key], "current");
    }
    // Add class and fill button on current page
    fillButton(section) {
        let sectionId = this.getSectionId(section);
        // console.log( sectionId );
        this.unfillButton();
        for (let button of this.buttons){
            let href = button.getAttribute("href");
            if (href == "#" + sectionId) this.functions.addClass(button, "actual-page");
        }
    }
    unfillButton() {
        for (let butt of this.buttons){
            let classes = butt.classList;
            if (classes.contains("actual-page")) this.functions.removeClass(butt, "actual-page");
        }
    }
}
exports.default = Scrolling;

},{"./helpFunctions":"4avXj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2xRyB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class NavBtn {
    constructor(){
        this.menuTopBtns = document.querySelectorAll(".na-list a");
        this.menuSideBtn = document.querySelectorAll(".na-list-side a");
        this.menuSvgBtn = document.querySelectorAll(".svg-menu a");
        this.homeBtn = document.querySelector(".btn-menu-home");
        // this.btnHome = document.querySelector('.btn-menu-home')
        this.buttons = [];
    }
    mergeBtn() {
        let btnArrayTop = Array.from(this.menuTopBtns);
        let btnArraySvg = Array.from(this.menuSvgBtn);
        let btnArraySide = Array.from(this.menuSideBtn);
        this.buttons.push(btnArrayTop, btnArraySvg, btnArraySide, this.homeBtn);
        const mergeBtn = this.buttons.flat(1);
        return mergeBtn;
    }
}
exports.default = NavBtn;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["jomVm","4E6dT"], "4E6dT", "parcelRequire2041")

//# sourceMappingURL=index.f668f8a2.js.map
