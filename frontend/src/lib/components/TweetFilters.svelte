<script>
  export let search;
  export let sortAsc;
  export let onSearchChange;
  export let onSortToggle;
</script>

<div class="controls">
  <input
    type="text"
    placeholder="🔍 Rechercher..."
    bind:value={search}
    on:input={onSearchChange}
    class="input"
  />
  <button on:click={onSortToggle}>
    Trier par date {sortAsc ? "↑" : "↓"}
  </button>
</div>