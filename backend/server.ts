import { Application } from "oak";
import { oakCors } from "oakCors";
import tweetsRouter from "./routes/tweets.ts";

const app = new Application();

app.use(oakCors());
app.use(tweetsRouter.routes());
app.use(tweetsRouter.allowedMethods());

console.log("🚀 Server running on http://localhost:8000");
await app.listen({ port: 8000 });