import * as log from "https://deno.land/std/log/mod.ts";

import { Application, send } from "https://deno.land/x/oak/mod.ts";

import api from "./api.ts";

const app = new Application();
const PORT = 8000;

await log.setup({
    handlers: {
        console: new log.handlers.ConsoleHandler("INFO"),
    },
    loggers: {
        default: {
            level: "INFO",
            handlers: ["console"],
        },
    },
});

app.addEventListener("error", (event) => {
    log.error(event.error);
});

// Add Error Handling Middleware
app.use(async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        ctx.response.body = "Internnal Server Error";
        throw err;
    }
})

app.use(async (ctx, next) => {
    await next();
    const time = ctx.response.headers.get("X-Response-Time");
    console.info(`${ctx.request.method} ${ctx.request.url}: ${time}`)
});

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const delta = Date.now() - start;
    ctx.response.headers.set("X-Response-Time", `${delta}ms`);
});

app.use(api.routes());
app.use(api.allowedMethods());

app.use(async (ctx) => {
    const filePath = ctx.request.url.pathname;
    const fileWhitelist = [
        "/index.html",
        "/javascripts/script.js",
        "/stylesheets/style.css",
        "/images/favicon.png",
    ];
    
    if (fileWhitelist.includes(filePath)) {
        await send(ctx, filePath, {
            root: `${Deno.cwd()}/public`,
        });
    }
});

if (import.meta.main) {
    log.info(`Starting server on port ${PORT}...`)
    await app.listen({
        port: PORT
    });
}
