import { Application, Router } from "oak";
import { oakCors } from "oakCors";

const router = new Router();

const tweets = JSON.parse(await Deno.readTextFile("./tweets.json"));

router.get("/tweets", (ctx) => {
  ctx.response.body = tweets;
});

const app = new Application();
app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());

console.log("🚀 Server running on http://localhost:8000");
await app.listen({ port: 8000 });
