<script lang="ts">
  import { onMount } from "svelte";
  import { blueskyPosts, fetchBlueskyPosts } from "../stores/blueskyStore";

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

<div class="feed">
  {#if loading}
    <p>Loading your posts...</p>
  {:else if error}
    <p>{error}</p>
  {:else}
    <ul>
      {#each $blueskyPosts as post}
        <li>
          <p>{post.text}</p>
          <small>{new Date(post.createdAt).toLocaleString()}</small>
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style>
  .feed {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    padding: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);  
  }

  li:last-child {
    border-bottom: none;
  }
</style>
