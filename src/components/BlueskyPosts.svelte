<script lang="ts">
  import { onMount } from "svelte";
  import { blueskyPosts, fetchBlueskyPosts } from "../stores/blueskyStore";

  let loading = true;
  let error: string | null = null;

  onMount(async () => {
    try {
      await fetchBlueskyPosts();
    } catch (err) {
      console.error(err);
      error = err.message || "An error occurred";
    } finally {
      loading = false;
    }
  });
</script>

{#if loading}
  <p>Loading posts...</p>
{:else if error}
  <p class="error">{error}</p>
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

<style>
  .error {
    color: red;
  }
</style>
