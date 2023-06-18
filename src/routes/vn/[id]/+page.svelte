<script>
// @ts-nocheck
	export let data;
</script>

<h1 class="text-center font-semibold text-2xl">{data.game.vn.title}</h1>
<img src={`${data.game.vn.image.url}`} alt="">
<div>{@html data.game.vn.description}</div>