<script>
    export let tweets = [];
  </script>
  
    {#if tweets.length > 0}
      <ul class="tweets">
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

