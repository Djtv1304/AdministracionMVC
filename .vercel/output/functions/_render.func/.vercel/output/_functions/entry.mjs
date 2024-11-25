import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CMt6WzHl.mjs';
import { manifest } from './manifest_AfzidloB.mjs';
import './_astro-internal_middleware.mjs';

const _page0 = () => import('./pages/_actions/_---path_.astro.mjs');
const _page1 = () => import('./pages/_image.astro.mjs');
const _page2 = () => import('./pages/battery/calculator.astro.mjs');
const _page3 = () => import('./pages/compare.astro.mjs');
const _page4 = () => import('./pages/dashboard.astro.mjs');
const _page5 = () => import('./pages/login.astro.mjs');
const _page6 = () => import('./pages/recommendations.astro.mjs');
const _page7 = () => import('./pages/register.astro.mjs');
const _page8 = () => import('./pages/vehicles/register.astro.mjs');
const _page9 = () => import('./pages/vehicles.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/actions/runtime/route.js", _page0],
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page1],
    ["src/pages/battery/calculator.astro", _page2],
    ["src/pages/compare/index.astro", _page3],
    ["src/pages/dashboard.astro", _page4],
    ["src/pages/login.astro", _page5],
    ["src/pages/recommendations/index.astro", _page6],
    ["src/pages/register.astro", _page7],
    ["src/pages/vehicles/register.astro", _page8],
    ["src/pages/vehicles/index.astro", _page9],
    ["src/pages/index.astro", _page10]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "3903320a-3cf2-499f-a9a9-14fe1ede902a",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
