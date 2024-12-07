import { AtpAgent } from "@atproto/api";
import { get, writable } from "svelte/store";

interface Post {
  text: string;
  createdAt: string;
}

export const blueskyPosts = writable<Post[]>([]);
export const authToken = writable<string | null>(null);
export const userDid = writable<string | null>(null);

const agent = new AtpAgent({ service: "https://bsky.social" });

const authenticate = async () => {
  try {
    const username = import.meta.env.VITE_BLUESKY_USERNAME;
    const password = import.meta.env.VITE_BLUESKY_PASSWORD;

    if (!username || !password) {
      throw new Error(
        "Username or password not provided in environment variables",
      );
    }

    const response = await agent.login({
      identifier: username,
      password,
    });

    const token = response.data.accessJwt;
    const did = response.data.did;

    authToken.set(token);
    userDid.set(did);
    return { token, did };
  } catch (error) {
    console.error("Failed to authenticate:", error);
    throw new Error("Authentication failed");
  }
};

export const fetchBlueskyPosts = async () => {
  if (!agent.session) {
    console.log("Agent not authenticated. Attempting to authenticate...");
    await authenticate();
  }

  try {
    const did = get(userDid);

    if (!did) {
      throw new Error("DID is not set after authentication");
    }

    const response = await agent.getAuthorFeed({
      actor: did,
    });

    const posts = response.data.feed.map((item) => {
      const record = item.post.record as { text: string; createdAt: string };
      return {
        text: record.text,
        createdAt: record.createdAt,
      };
    });

    blueskyPosts.set(posts);
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    throw new Error("Failed to fetch posts");
  }
};
