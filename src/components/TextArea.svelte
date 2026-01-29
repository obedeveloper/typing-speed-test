<script lang="ts">
  const { passage }: { passage: string } = $props();

  let textInput = $state('');
</script>

<div class="container">
  <div>
    {#each passage.split('') as letter, index (index)}
      {@const letterInput = textInput.at(index)}

      {#if letterInput}
        {@const isAccurate = letterInput === letter}
        <span class={isAccurate ? 'green' : 'red'}>{letter}</span>
      {:else}
        <span>{letter}</span>
      {/if}
    {/each}
  </div>
  <textarea spellcheck="false" bind:value={textInput}></textarea>
</div>

<style>
  .container {
    display: grid;
    grid-template-rows: auto;

    & > * {
      grid-area: 1 / -1;
    }

    div {
      color: var(--Neutral-500);
    }
  }

  span.green {
    color: var(--Green-500);
  }

  span.red {
    color: var(--Red-500);
    text-decoration: underline;
  }

  textarea {
    background-color: transparent;
    color: transparent;
    resize: none;
    border: none;
    font: inherit;

    &:focus {
      outline: none;
    }
  }
</style>
