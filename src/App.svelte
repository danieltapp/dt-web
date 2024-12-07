<script>
  import Header from './components/Header.svelte';
  import Intro from './components/Intro.svelte';
  // import BlueskyFeed from './components/BlueskyFeed.svelte';
  import SocialLinks from './components/SocialLinks.svelte';
  import Canvas from './components/Canvas.svelte';
</script>

<Canvas />
<main>
  <Header />
  <SocialLinks />
  <Intro />
  <!-- <BlueskyFeed /> -->
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
  }
</style>
