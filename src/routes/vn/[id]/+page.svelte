<script>
// @ts-nocheck
	import Carousel from "svelte-carousel";
	export let data;
	let carousel; // for calling methods of the carousel instance
	const handleNextClick = () => {
		carousel.goToNext();
	};
  </script>
  
  <main>
	{#if data}
	  <h1 class="text-center font-semibold text-2xl">{data.vnInfoData.title}</h1>
	  <img src={data.vnInfoData.image.url} alt="">
	  <div>{@html data.vnInfoData.description.replace(/\[[^\]]*\]/g, '')}</div>
	{:else}
	  <p>Loading...</p>
	{/if}

	
	<div class="carousel">
	<Carousel
    bind:this={carousel}
    let:loaded
    autoplay
    autoplayDuration={3000}
    autoplayProgressVisible
	
>	
    {#each data.vnInfoData.screenshots as src, imageIndex (src)}
      <div class="image-container ">
        {#if loaded.includes(imageIndex)}
			<img class="image" src={src.url} alt='content' width={600} />
        {/if}
      </div>
    {/each}
</Carousel>
</div>
  </main>

  <style>
	.carousel{
		width: 600px;
	}
  </style>
  
  