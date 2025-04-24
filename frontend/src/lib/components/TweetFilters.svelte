<script lang="ts">
  import { themes } from "$lib/constants/themes";
  export let search: string;
  export let sortAsc: boolean;
  export let onSearchChange: (e: Event) => void;
  export let onSortToggle: () => void;
  export let selectedTheme: string;
  export let onChangeTheme: (e:Event) => void;
</script>

<form class="container my-4">
  <div class="row m-1">
    <select on:change={onChangeTheme} class="form-select col m-1 rounded-lg" bind:value={selectedTheme}>
      <option selected value="Tous">Tous</option>
        {#each themes as theme}
          <option value={theme}>{theme}</option>
        {/each}
    </select>
    
    <input
      type="text"
      placeholder="🔍 Rechercher..."
      bind:value={search}
      on:input={onSearchChange}
      class="form-control col m-1"
    />
    <button on:click={onSortToggle} class="btn btn-primary col m-1">
      Trier par date {sortAsc ? "↑" : "↓"}
    </button>
    
</div>
</form>