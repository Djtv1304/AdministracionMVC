import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_BQRjURhJ.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./pages/_actions/_---path_.astro.mjs');
const _page1 = () => import('./pages/_image.astro.mjs');
const _page2 = () => import('./pages/battery.astro.mjs');
const _page3 = () => import('./pages/compare.astro.mjs');
const _page4 = () => import('./pages/dashboard.astro.mjs');
const _page5 = () => import('./pages/login.astro.mjs');
const _page6 = () => import('./pages/recommendations/registerroutine.astro.mjs');
const _page7 = () => import('./pages/recommendations.astro.mjs');
const _page8 = () => import('./pages/register.astro.mjs');
const _page9 = () => import('./pages/routine-analysis.astro.mjs');
const _page10 = () => import('./pages/vehicles/register.astro.mjs');
const _page11 = () => import('./pages/vehicles/registercombustion.astro.mjs');
const _page12 = () => import('./pages/vehicles.astro.mjs');
const _page13 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/actions/runtime/route.js", _page0],
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page1],
    ["src/pages/battery/index.astro", _page2],
    ["src/pages/compare/index.astro", _page3],
    ["src/pages/dashboard.astro", _page4],
    ["src/pages/login.astro", _page5],
    ["src/pages/recommendations/registerRoutine.astro", _page6],
    ["src/pages/recommendations/index.astro", _page7],
    ["src/pages/register.astro", _page8],
    ["src/pages/routine-analysis/index.astro", _page9],
    ["src/pages/vehicles/register.astro", _page10],
    ["src/pages/vehicles/registerCombustion.astro", _page11],
    ["src/pages/vehicles/index.astro", _page12],
    ["src/pages/index.astro", _page13]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "0b7f59e7-b7b2-4a50-9134-1ffffc9db1cb"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
