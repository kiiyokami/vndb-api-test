<script>
  export let data;
</script>

<section>
  <ul>
    {#each data.list as item}
      <li><a href="/vn/{item.id}">{item.title}</a></li>
    {/each}
  </ul>
</section>
