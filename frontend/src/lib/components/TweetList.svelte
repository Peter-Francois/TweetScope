<script lang="ts">
  import type { Tweet } from '$lib/types/tweet';
  export let tweets: Tweet[] = [];
</script>
  
    {#if tweets.length > 0}
    
    <div class="container">
      <ul class="row  gap-2 p-0">
        {#each tweets as tweet}
          <li class="card border-primary border-2 p-0 col-sm-12 col-md-5 col-xxl-3 mx-auto">
            <h3 class="card-header">{tweet.author}</h3>
            <div class="card-body">
            <em class="badge bg-primary">{tweet.theme}</em>
            <p class="card-text">{tweet.content}</p>
          </div>
            <p class="card-footer m-0">
              {tweet.date}
            </p>
          </li>
        {/each}
      </ul>
    </div>
    {:else}
      <p>Aucun tweet disponible pour le moment</p>
    {/if}

