import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderHead, a as renderComponent, f as renderSlot, b as createAstro } from './astro/server_CdaQEI4y.mjs';
import 'kleur/colors';
import { $ as $$Header } from './Header_Dpyc4DYF.mjs';
import 'clsx';

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-white mt-auto"> <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"> <div class="border-t border-gray-200 pt-8"> <p class="text-center text-gray-500">
© ${(/* @__PURE__ */ new Date()).getFullYear()} EV Manager. All rights reserved.
</p> </div> </div> </footer>`;
}, "C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$PublicLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PublicLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="EV Management System"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>${title}</title>${renderHead()}</head> <body class="min-h-screen bg-gray-50"> ${renderComponent($$result, "Header", $$Header, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/diego/OneDrive/Escritorio/CoreIngenieraWeb/src/layouts/PublicLayout.astro", void 0);

export { $$PublicLayout as $ };
