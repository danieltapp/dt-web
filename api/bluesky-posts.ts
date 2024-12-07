import { AtpAgent, AppBskyFeedGetAuthorFeed } from "@atproto/api";
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const agent = new AtpAgent({ service: "https://bsky.social" });

  const username = process.env.VITE_BLUESKY_USERNAME;
  const password = process.env.VITE_BLUESKY_PASSWORD;
  console.log("BLUESKY_USERNAME:", process.env.VITE_BLUESKY_USERNAME);
  console.log("Password length:", process.env.VITE_BLUESKY_PASSWORD?.length);

  if (!username || !password) {
    return res.status(400).json({ error: "Missing BlueSky credentials." });
  }

  try {
    // Authenticate the agent
    const loginResponse = await agent.login({
      identifier: username,
      password,
    });

    const did = loginResponse.data.did;

    // Fetch the user's posts using built-in types
    const feedResponse: AppBskyFeedGetAuthorFeed.Response =
      await agent.getAuthorFeed({
        actor: did,
      });

    // Map the feed data to your desired format
    const posts = feedResponse.data.feed.map((item) => {
      const record = item.post.record as { text: string; createdAt: string };
      return {
        text: record.text,
        createdAt: record.createdAt,
      };
    });

    // Return posts as JSON
    return res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return res.status(500).json({ error: "Failed to fetch posts" });
  }
}
