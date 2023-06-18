<script>
	export let data;
</script>

<section>
    <ul>
    {#each data.list as { id, title }}
      <li><a href="/vn/{id}">{title}</a></li>
    {/each}
    </ul>
</section>

