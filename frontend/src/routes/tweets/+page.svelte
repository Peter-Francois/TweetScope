<script lang="ts">
    export let data;
    const tweets = data.tweets || [];
  </script>
  
  <main>
    <h1>Derniers Tweets</h1>
    {#if tweets.length > 0}
      <ul>
        {#each tweets as tweet}
          <li>
            <strong>{tweet.author}</strong> ({tweet.date}) <br />
            <em>{tweet.theme}</em> <br />
            <p>{tweet.content}</p>
          </li>
        {/each}
      </ul>
    {:else}
      <p>Aucun tweet disponible pour le moment</p>
    {/if}
  </main>
  
  <style>
    main {
      padding: 1rem;
    }
  
    ul {
      list-style-type: none;
      padding-left: 0;
    }
  
    li {
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;
      padding-bottom: 1rem;
    }
  
    h1 {
      color: black; 
    }
  
    p {
      font-size: 1rem;
      color: #555;
    }
  
    em {
      font-size: 0.9rem;
      color: #888;
    }
  </style>