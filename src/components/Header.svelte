<script>
  export let name = "Daniel Tapp"; 
</script>

<header>
  <h1>
    {name}<span class="blinking-cursor">_</span>
  </h1>
</header>

<style>
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  h1 {
    font-size: 2rem;
    font-weight: bold;
    color: #00ff00; 
    background-color: #000; 
    padding: 0.5rem 1rem;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
  }

  .blinking-cursor {
    animation: blink 1s step-end infinite;
    color: #00ff00;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
</style>
