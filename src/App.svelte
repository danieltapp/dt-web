<script>
  import Header from './components/Header.svelte';
  import Intro from './components/Intro.svelte';
  import BlueskyFeed from './components/BlueskyFeed.svelte';
  import SocialLinks from './components/SocialLinks.svelte';
  import Canvas from './components/Canvas.svelte';
</script>

<Canvas />
<main>
  <Header />
  <SocialLinks />
  <Intro />
  <div class="feed-container">
    <BlueskyFeed />
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 0 1rem;
  }

  .feed-container {
    flex: 1;
    width: 100%;
    max-width: 800px;
    overflow-y: auto;
    border: 2px solid #ccc;
    border-radius: 12px;
    padding: 1rem;
    margin: 1rem 0;
  }

  @media (max-width: 600px) {
    main {
      padding: 0.5rem;
    }
    h1 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
    }
  }

</style>
