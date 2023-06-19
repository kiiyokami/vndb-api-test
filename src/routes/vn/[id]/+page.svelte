<script>
  // @ts-nocheck
  import Carousel from "svelte-carousel";
  import { browser } from "$app/environment";
  export let data;
  let carousel; // for calling methods of the carousel instance
  const handleNextClick = () => {
    carousel.goToNext();
  };
</script>

<main>
  {#if data.vnInfo !== null}
    <h1 class="text-center font-semibold text-2xl">{data.vnInfo.title}</h1>
    <img src={data.vnInfo.image.url} alt="" />
    <div>{@html data.vnInfo.description.replace(/\[[^\]]*\]/g, "")}</div>

    <div class="carousel">
      {#if browser}
        <Carousel
          bind:this={carousel}
          let:loaded
          autoplay
          autoplayDuration={3000}
          autoplayProgressVisible
        >
          {#each data.vnInfo.screenshots as src, imageIndex (src)}
            <div class="image-container">
              {#if loaded.includes(imageIndex)}
                <img class="image" src={src.url} alt="content" width={600} />
              {/if}
            </div>
          {/each}
        </Carousel>
      {/if}
    </div>
  {:else}
    <p>Loading...</p>
  {/if}
</main>

<style>
  .carousel {
    width: 600px;
  }
</style>
