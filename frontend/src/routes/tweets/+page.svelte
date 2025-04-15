<script lang="ts">
    import TweetFilters from '$lib/components/TweetFilters.svelte';
    import TweetList from '$lib/components/TweetList.svelte';
    import type { Tweet } from '$lib/types/tweet.js';
    import type { PageData } from './$types';

    export let data: PageData;
    let search = "";
    let sortAsc = false;
    $: filteredTweets = (data.tweets as Tweet[])
    .filter((t: Tweet) =>
      t.content.toLowerCase().includes(search.toLowerCase()) ||
      t.author.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a: Tweet, b: Tweet) => {
      return sortAsc
        ? new Date(a.date).getTime() - new Date(b.date).getTime()
        : new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    function handleSearchChange(e) {
      search = e.target.value;
    }

    function toggleSort() {
      sortAsc = !sortAsc;
    }
  </script>
  
  <main>
    <TweetFilters
  {search}
  {sortAsc}
  onSearchChange={handleSearchChange}
  onSortToggle={toggleSort}
/>

    <h1>Derniers Tweets</h1>
    <TweetList tweets={filteredTweets} />
    
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