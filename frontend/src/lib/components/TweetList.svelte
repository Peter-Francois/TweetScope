<script>
    export let tweets = [];
  </script>
  
    {#if tweets.length > 0}
      <ul class="tweets">
        {#each tweets as tweet}
          <li class="card border-primary m-3">
            <h3 class="card-header">{tweet.author}</h3>
            <div class="card-body">
            <em class="badge bg-primary">{tweet.theme}</em>
            <p class="card-text">{tweet.content}</p>
          </div>
            <p class  ="card-footer mb-0">
              {tweet.date}
            </p>
          </li>
        {/each}
      </ul>
    {:else}
      <p>Aucun tweet disponible pour le moment</p>
    {/if}

