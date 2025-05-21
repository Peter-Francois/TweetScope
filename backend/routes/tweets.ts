import { Router, Context } from "oak";
import { getTweetsFromNitter } from "../services/getTweetsFromNitter.ts";


const router = new Router();

// const tweets = JSON.parse(await Deno.readTextFile("./tweets.json"));



router.get("/tweets", async (ctx: Context) => {
  const tweets = await getTweetsFromNitter();
  ctx.response.body = tweets;
});

export default router;