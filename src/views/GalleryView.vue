<template>
  
<section class="gallery" id="gallery">

<h1 class="heading"> Our <span>Gallery</span> </h1>

<div class="gallery-container">

   <a class="box" href="../assets/g-img-1.jpg"><img src="../assets/g-img-1.jpg" alt=""></a>
   <a class="box" href="../assets/g-img-2.jpg"><img src="../assets/g-img-2.jpg" alt=""></a>
   <a class="box" href="../assets/g-img-3.png"><img src="../assets/g-img-3.png" alt=""></a>
   <a class="box" href="../assets/g-img-4.png"><img src="../assets/g-img-4.png" alt=""></a>
   <a class="box" href="../assets/g-img-5.png"><img src="../assets/g-img-5.png" alt=""></a>
   <a class="box" href="../assets/g-img-6.png"><img src="../assets/g-img-6.png" alt=""></a>
   <a class="box" href="../assets/g-img-7.png"><img src="../assets/g-img-7.png" alt=""></a>
   <a class="box" href="../assets/g-img-8.png"><img src="../assets/g-img-8.png" alt=""></a>
</div>

</section>

</template>

<script>

export default {
components:{
  
}
}
</script>

<style scoped>
.gallery{
   padding: 35px;
   margin-bottom: 100px;
}
.gallery h1{
  font-size: 30px;
  text-align: center;
  margin-bottom: 15px;
  background:  -webkit-linear-gradient(#EC352E, #5454eb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;;
}
.gallery .gallery-container {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (minmax(20rem, 4fr))[auto-fit];
      grid-template-columns: repeat(auto-fit, minmax(20rem, 3fr));
  gap: 2rem;
}

.gallery .gallery-container .box {
  height: 15rem;
  overflow: hidden;
}

.gallery .gallery-container .box:hover img {
   opacity: .5;
  -webkit-transform: scale(1.1);
          transform: scale(1.1);
}

.gallery .gallery-container .box img {
  height: 100%;
  width: 100%;
  border-radius: 20px;
  -o-object-fit: cover;
     object-fit: cover;
}
.social-icons{
   display: none;
}

</style>