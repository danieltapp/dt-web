<script lang="ts">
  import { onMount } from "svelte";
  import { blueskyPosts, fetchBlueskyPosts } from "../stores/blueskyStore";
  import BlueskyPost from "./BlueskyPost.svelte";

  let loading = true;
  let error: string | null = null;

  onMount(async () => {
    try {
      await fetchBlueskyPosts();
    } catch (err) {
      error = "Failed to load posts.";
    } finally {
      loading = false;
    }
  });
</script>

{#if loading}
  <p>Loading your posts...</p>
{:else if error}
  <p>{error}</p>
{:else}
  <ul>
    {#each $blueskyPosts as post}
      <li>
        <BlueskyPost {post} />
      </li>
    {/each}
  </ul>
{/if}

<style>
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 2rem;
  }

  li:last-child {
    margin-bottom: 0;
  }

  p {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.8);
    text-align: center;
  }
</style>
