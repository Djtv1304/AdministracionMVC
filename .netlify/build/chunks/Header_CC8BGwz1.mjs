import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, b as createAstro, F as Fragment } from './astro/server_CSWU1b9h.mjs';
import 'kleur/colors';

const $$Astro = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Header;
  const { isAuthenticated = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="bg-white shadow-sm"> <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> <div class="flex h-16 justify-between items-center"> <div class="flex items-center"> <a href="/" class="text-2xl font-bold text-primary-600">EV Manager</a> </div> <div class="flex items-center gap-4"> ${!isAuthenticated ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <a href="/login" class="text-gray-600 hover:text-primary-600">Login</a> <a href="/register" class="bg-cyan-600 text-white px-4 py-2 rounded-md hover:bg-cyan-700">
Sign Up
</a> ` })}` : renderTemplate`<button class="text-gray-600 hover:text-primary-600">Logout</button>`} </div> </div> </nav> </header>`;
}, "C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/components/Header.astro", void 0);

export { $$Header as $ };
