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
    <h1 class="text-center m-3 p-2 rounded text-white bg-primary">TweetScope</h1>
    <TweetFilters
  {search}
  {sortAsc}
  onSearchChange={handleSearchChange}
  onSortToggle={toggleSort}
/>

    <h2 class="m-3 text-primary">Derniers Tweets</h2>
    <TweetList  tweets={filteredTweets} />
    
  </main>
  