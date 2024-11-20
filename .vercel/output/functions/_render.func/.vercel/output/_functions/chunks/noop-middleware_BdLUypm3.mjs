import { N as NOOP_MIDDLEWARE_HEADER } from './astro/server_CdaQEI4y.mjs';

const NOOP_MIDDLEWARE_FN = (ctx, next) => {
  ctx.request.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return next();
};

export { NOOP_MIDDLEWARE_FN as N };
