<script>
    import "../app.css";
</script>
  

<nav class="shadow-xl">
    <div class='flex justify-between items-center h-full w-full px-5 2xl:px-16'>
    <div>
      <ul class='hidden sm:flex'>
      <a href="/" class='font-bold mr-10'>VN Library</a>
      <a href="/list" class='ml-5'>List</a>
      </ul>

    </div>
    <div>

    </div>
      
    </div>
</nav>
  <div class='bg-image'>
  </div>
  <div class="container">
    <slot />
  </div>
 

<style lang="postcss">
    :global(html,body){
        margin: 0;
        height: 100%;
        weight: 100%;
        background-color: var(--primary-color);
        color: var(--secondary-color);
    }
    nav {
      background-color: var(--primary-color);
      height: 4rem;
      width: 100%;
      font-size: larger;
      font-family: 'Inter', sans-serif;
    }
    div.bg-image{
      height: 100%;
      background-image: url('./1.jpg');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      filter: blur(8px);
      -webkit-filter: blur(8px);
    }
    div.container{
      background-color: var(--container-border);
      background-color: rgba(0,0,0,0.4);
      color: white;
      font-family: 'Montserrat', sans-serif;
      border: 3px solid #f1f1f1;
      position: absolute;
      top: 60%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
      width: 80%;
      padding: 20px;
      text-align: center;
}
</style>