import { DOMParser } from "deno_dom";

const NITTER_INSTANCE = "https://nitter.net";
const USERNAME = "EmmanuelMacron";
let id = 1;
interface Tweet {
  id: number;
  author: string;
  content: string;
  date: string | null;
  theme: string;
  url: string | null;
}

export async function getTweetsFromNitter(): Promise<Array<Tweet>> {
  const res = await fetch(`${NITTER_INSTANCE}/${USERNAME}`);
  const html = await res.text();
  const doc = new DOMParser().parseFromString(html, "text/html");

  if (!doc) return [];

  const tweetElements = doc.querySelectorAll(".timeline-item");
  const tweets: Array<Tweet> = [];

  for (let i = 0; i < 5; i++) {
    const el = tweetElements[i];

    const content = el.querySelector(".tweet-content")?.textContent?.trim() || "Contenu inconnu";
    const rawDate = el.querySelector(".tweet-date a")?.getAttribute("title")?.replace("·", "").trim();
    const parsedDate = rawDate ? new Date(rawDate) : "";
    const url = el.querySelector(".tweet-link")?.getAttribute("href");
    const author = el.querySelector(".username")?.getAttribute("href")?.slice(1) || "Inconnu";

    tweets.push({
      id: id++,
      content,
      date: parsedDate instanceof Date && !isNaN(parsedDate.getTime())
        ? parsedDate.toISOString()
        : "",
      url: url ? `${NITTER_INSTANCE}${url}` : "",
      author,
      theme: "Autre",
    });
  }

  return tweets;
}