<script lang="ts">
  import Canvas from './components/Canvas.svelte';
  import BlueskyPosts from './components/BlueskyPosts.svelte';
</script>

<Canvas />
<main>
  <h1>🚀 DT WEB 🚀</h1>
  <BlueskyPosts />
</main>

<style>
  main {
    position: relative;
    z-index: 1;
    text-align: center;
    color: white;
    font-family: Arial, sans-serif;
  }
</style>
