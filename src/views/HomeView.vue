<template>
  <section class="home" id="home">
    <div class="banner">
        <div class="app-text">
          <h1>THINK INNOVATIVE<br> WORK WITH PASSION</h1>
          <p>With many skilled professionals, we are always ready to solve your
technical problems quickly.</p>
          <button class="btn"><span>Contact Now</span> </button>
        </div>
    </div>
    
    <div class="app-picture">
      <img src="https://i.pinimg.com/originals/86/8a/1b/868a1b2a27def51b40103d54a34bed88.gif" alt="">   
    </div>
    <FooterView></FooterView>
  </section>
  
  
</template>

<script>
// @ is an alias to /src
import FooterView from './FooterView.vue'

export default {
  components:{
      FooterView
    },
}
</script>
<style scoped>
  .app-text h1{
    font-size: 3rem;
  }
  @media (max-width: 991px){
    .app-text h1{
    font-size: 2rem;
  }
  }
</style>