<script>
  export let search;
  export let sortAsc;
  export let onSearchChange;
  export let onSortToggle;
</script>

<form class="container ">
  <div class="row m-1">
  <input
    type="text"
    placeholder="🔍 Rechercher..."
    bind:value={search}
    on:input={onSearchChange}
    class="form-control col m-1"
  />
  <button on:click={onSortToggle} class="btn btn-primary col-4 m-1">
    Trier par date {sortAsc ? "↑" : "↓"}
  </button>
</div>
</form>