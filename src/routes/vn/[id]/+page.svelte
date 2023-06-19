<script>
// @ts-nocheck

	export let data;
  
  </script>
  
  <main>
	{#if data}
	  <h1 class="text-center font-semibold text-2xl">{data.vnInfoData.title}</h1>
	  <img src={data.vnInfoData.image.url} alt="">
	  <div>{@html data.vnInfoData.description.replace(/\[[^\]]*\]/g, '')}</div>
	{:else}
	  <p>Loading...</p>
	{/if}
  </main>
  
  