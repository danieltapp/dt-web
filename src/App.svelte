<script>
  import Header from './components/Header.svelte';
  import Intro from './components/Intro.svelte';
  // import BlueskyFeed from './components/BlueskyFeed.svelte';
  import SocialLinks from './components/SocialLinks.svelte';
  import Canvas from './components/Canvas.svelte';
  // import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
  // import { faBluesky } from "@fortawesome/free-brands-svg-icons";
</script>

<Canvas />
<main>
  <Header />
  <SocialLinks />
  <Intro />
  <!-- <div class="feed-container">
    <div class="feed-header">
      <FontAwesomeIcon class="logo" icon={faBluesky} />
      <span class="header-text">posting through it</span>
      <FontAwesomeIcon class="logo" icon={faBluesky} />
    </div>
    <BlueskyFeed />
  </div> -->
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
  }

  /* .feed-container {
    position: relative;
    width: 100%;
    max-width: 800px;
    border: 6px solid rgba(255, 255, 255, 0.6);
    border-radius: 12px;
    padding: 2rem 1rem;
    margin: 2rem 0;
    background-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  }

  .feed-header {
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: linear-gradient(135deg, #87ceeb, #1e90ff);
    border: 2px solid rgba(255, 255, 255, 0.6);
    border-radius: 24px;
    color: #fff;
    font-family: 'Fira Code', monospace;
    font-size: 1rem;
    z-index: 10;
    white-space: nowrap;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  }

  .header-text {
    font-size: 1rem;
    font-weight: bold;
  }

  .feed-container::-webkit-scrollbar {
    width: 8px;
  }

  .feed-container::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #87ceeb, #1e90ff);
    border-radius: 4px;
  }

  .feed-container::-webkit-scrollbar-track {
    background: transparent;
  } */

  @media (max-width: 600px) {
    main {
      padding: 0.5rem;
    }

    /* .feed-container {
      max-height: 300px;
      padding: 1rem;
    }

    .feed-header {
      font-size: 0.9rem;
    } */
  }
</style>
