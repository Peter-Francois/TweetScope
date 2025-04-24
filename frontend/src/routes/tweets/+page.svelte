<script lang="ts">
    import TweetFilters from '$lib/components/TweetFilters.svelte';
    import TweetList from '$lib/components/TweetList.svelte';
    import type { Tweet } from '$lib/types/tweet.js';
    import type { PageData } from './$types';

    export let data: PageData;
    let search = "";
    let sortAsc = false;
    let selectedTheme = "Tous";
    $: filteredTweets = (data.tweets as Tweet[])
    .filter((tweet: Tweet) =>
      tweet.theme.toLowerCase() === selectedTheme.toLowerCase() ||
      selectedTheme === "Tous"
    )
    .filter((tweet: Tweet) =>
      tweet.content.toLowerCase().includes(search.toLowerCase()) ||
      tweet.author.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a: Tweet, b: Tweet) => {
      return sortAsc
        ? new Date(a.date).getTime() - new Date(b.date).getTime()
        : new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  
    function handleSearchChange(e: Event) {
      search = (e.target as HTMLInputElement).value;
    }

    function toggleSort() {
      sortAsc = !sortAsc;
    }

    function handleThemeChange(e: Event) {
      selectedTheme = (e.target as HTMLSelectElement).value;
    }
  </script>
  
  <main>
    <h1 class="text-center m-3 px-1 py-4 rounded text-white bg-primary">TweetScope</h1>
    <h2 class="mb-0 mt-4 mx-4 text-end"><span class="badge rounded-bottom-0 bg-secondary">Filtres</span></h2>
    <div class="border border-secondary rounded-start-4 rounded-bottom-4 mt-0 mx-4">
      <TweetFilters
        {search}
        {sortAsc}
        onSearchChange={handleSearchChange}
        onSortToggle={toggleSort}
        {selectedTheme}
        onChangeTheme={handleThemeChange}
      />
    </div>

    <h2 class="mx-4 my-3 text-primary">Derniers Tweets 🔥</h2>
    <TweetList  tweets={filteredTweets} />
    
  </main>
  