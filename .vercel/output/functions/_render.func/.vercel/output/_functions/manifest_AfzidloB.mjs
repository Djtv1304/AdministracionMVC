import 'kleur/colors';
import './chunks/shared_C5l7COKz.mjs';
import 'es-module-lexer';
import { g as decodeKey } from './chunks/astro/server_DDnACvc8.mjs';
import 'clsx';
import './chunks/astro-designed-error-pages_55Tp5d6M.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_Ca-eTyXp.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_actions/[...path]","pattern":"^\\/_actions(?:\\/(.*?))?$","segments":[[{"content":"_actions","dynamic":false,"spread":false}],[{"content":"...path","dynamic":true,"spread":true}]],"params":["...path"],"component":"node_modules/astro/dist/actions/runtime/route.js","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/calculator.BKUFyrLu.css"}],"routeData":{"route":"/battery/calculator","isIndex":false,"type":"page","pattern":"^\\/battery\\/calculator\\/?$","segments":[[{"content":"battery","dynamic":false,"spread":false}],[{"content":"calculator","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/battery/calculator.astro","pathname":"/battery/calculator","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/calculator.BKUFyrLu.css"}],"routeData":{"route":"/compare","isIndex":true,"type":"page","pattern":"^\\/compare\\/?$","segments":[[{"content":"compare","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/compare/index.astro","pathname":"/compare","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/calculator.BKUFyrLu.css"}],"routeData":{"route":"/dashboard","isIndex":false,"type":"page","pattern":"^\\/dashboard\\/?$","segments":[[{"content":"dashboard","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/dashboard.astro","pathname":"/dashboard","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/calculator.BKUFyrLu.css"}],"routeData":{"route":"/login","isIndex":false,"type":"page","pattern":"^\\/login\\/?$","segments":[[{"content":"login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/login.astro","pathname":"/login","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/calculator.BKUFyrLu.css"}],"routeData":{"route":"/recommendations","isIndex":true,"type":"page","pattern":"^\\/recommendations\\/?$","segments":[[{"content":"recommendations","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/recommendations/index.astro","pathname":"/recommendations","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/calculator.BKUFyrLu.css"}],"routeData":{"route":"/register","isIndex":false,"type":"page","pattern":"^\\/register\\/?$","segments":[[{"content":"register","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/register.astro","pathname":"/register","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/calculator.BKUFyrLu.css"}],"routeData":{"route":"/vehicles/register","isIndex":false,"type":"page","pattern":"^\\/vehicles\\/register\\/?$","segments":[[{"content":"vehicles","dynamic":false,"spread":false}],[{"content":"register","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/vehicles/register.astro","pathname":"/vehicles/register","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/calculator.BKUFyrLu.css"}],"routeData":{"route":"/vehicles","isIndex":true,"type":"page","pattern":"^\\/vehicles\\/?$","segments":[[{"content":"vehicles","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/vehicles/index.astro","pathname":"/vehicles","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/calculator.BKUFyrLu.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/pages/login.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/pages/register.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/pages/battery/calculator.astro",{"propagation":"none","containsHead":true}],["C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/pages/compare/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/pages/dashboard.astro",{"propagation":"none","containsHead":true}],["C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/pages/recommendations/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/pages/vehicles/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/pages/vehicles/register.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/actions/loginUser.ts",{"propagation":"in-tree","containsHead":false}],["C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/actions/index.ts",{"propagation":"in-tree","containsHead":false}],["\u0000astro:internal-actions",{"propagation":"in-tree","containsHead":false}],["C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/node_modules/astro/dist/actions/runtime/virtual/get-action.js",{"propagation":"in-tree","containsHead":false}],["C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/node_modules/astro/dist/actions/runtime/middleware.js",{"propagation":"in-tree","containsHead":false}],["\u0000astro-internal:middleware",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/node_modules/astro/dist/actions/runtime/route.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:node_modules/astro/dist/actions/runtime/route@_@js",{"propagation":"in-tree","containsHead":false}],["\u0000astro:actions",{"propagation":"in-tree","containsHead":false}],["C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/actions/newUser.ts",{"propagation":"in-tree","containsHead":false}],["C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/actions/newVehicle.ts",{"propagation":"in-tree","containsHead":false}],["C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/components/Forms/LoginForm.tsx",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/login@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/components/Forms/SignupForm.tsx",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/register@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/components/Forms/Vehicles/RegisterVehicleForm.tsx",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/vehicles/register@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/astro/dist/actions/runtime/route@_@js":"pages/_actions/_---path_.astro.mjs","\u0000@astro-page:src/pages/compare/index@_@astro":"pages/compare.astro.mjs","\u0000@astro-page:src/pages/dashboard@_@astro":"pages/dashboard.astro.mjs","\u0000@astro-page:src/pages/recommendations/index@_@astro":"pages/recommendations.astro.mjs","\u0000@astro-page:src/pages/vehicles/index@_@astro":"pages/vehicles.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/battery/calculator@_@astro":"pages/battery/calculator.astro.mjs","\u0000@astro-page:src/pages/login@_@astro":"pages/login.astro.mjs","\u0000@astro-page:src/pages/register@_@astro":"pages/register.astro.mjs","\u0000@astro-page:src/pages/vehicles/register@_@astro":"pages/vehicles/register.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/node_modules/astro/dist/actions/runtime/virtual/get-action.js":"chunks/get-action_DbHH0JjD.mjs","\u0000@astrojs-manifest":"manifest_AfzidloB.mjs","\u0000astro:internal-actions":"chunks/_astro_internal-actions_wrTLd61Q.mjs","C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/components/BatteryCalculator":"_astro/BatteryCalculator.Cr4yEK5C.js","C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/components/Forms/LoginForm.tsx":"_astro/LoginForm.CRPXzMFF.js","C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/components/Forms/SignupForm.tsx":"_astro/SignupForm.BOGFFqhC.js","C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/components/Forms/Vehicles/RegisterVehicleForm.tsx":"_astro/RegisterVehicleForm.BELnIcXd.js","@astrojs/react/client.js":"_astro/client.BY2mA-CD.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/calculator.BKUFyrLu.css","/favicon.svg","/_astro/BatteryCalculator.Cr4yEK5C.js","/_astro/client.BY2mA-CD.js","/_astro/iconBase.BimQ2q1R.js","/_astro/index.B52nOzfP.js","/_astro/jsx-runtime.CRkqtJS5.js","/_astro/LoginForm.CRPXzMFF.js","/_astro/RegisterVehicleForm.BELnIcXd.js","/_astro/SignupForm.BOGFFqhC.js","/_astro/_astro_actions.DCLOYqNE.js"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"4EXvNKQaamElPbXgExKkZbGpf6KHGBUAyxAjVUiJhBA=","experimentalEnvGetSecretEnabled":false});

export { manifest };