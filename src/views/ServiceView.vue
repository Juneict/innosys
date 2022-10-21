<template>
<section class="services" id="services">

<h1 class="heading"> Our <span>Services</span> </h1>

<div class="box-container">

   <div class="box">
      <img src="../assets/service-1.svg" alt="">
      <h3>computer repair</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, asperiores.</p>
   </div>

   <div class="box">
      <img src="../assets/service-2.svg" alt="">
      <h3>laptop repair</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, asperiores.</p>
   </div>

   <div class="box">
      <img src="../assets/service-3.svg" alt="">
      <h3>Printer repair</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, asperiores.</p>
   </div>

   <div class="box">
      <img src="../assets/service-4.svg" alt="">
      <h3>CCTV Installation</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, asperiores.</p>
   </div>

   <div class="box">
      <img src="../assets/service-5.svg" alt="">
      <h3>Networking</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, asperiores.</p>
   </div>

   <div class="box">
      <img src="../assets/service-6.svg" alt="">
      <h3>Website Development</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, asperiores.</p>
   </div>

</div>
<div class="fun-fact">
  
  <div class="box">
      <img src="../assets/fun-fact-icon-1.svg" alt="">
     <div class="info">
      <h3>1000+</h3>
      <p>repairs done</p>
     </div>
   </div>

   <div class="box">
      <img src="../assets/fun-fact-icon-3.svg" alt="">
      <div class="info">
         <h3>100%</h3>
         <p>happy clients</p>
      </div>
   </div>

   <div class="box">
      <img src="../assets/fun-fact-icon-4.svg" alt="">
      <div class="info">
         <h3>13</h3>
         <p>active workers</p>
      </div>
   </div>
</div>
</section>

</template>

<script>
export default {

}
</script>

<style>

.services {
  background: #fff;
  margin: 20px;
  padding: 20px;
}
.services h1{
  font-size: 30px;
  text-align: center;
  margin-bottom: 15px;
  background:  -webkit-linear-gradient(#EC352E, #5454eb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;;
}

.services .box-container {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (minmax(1rem, 3fr))[auto-fit];
      grid-template-columns: repeat(auto-fit, minmax(1rem, 3fr));
  gap: 1rem;
}

.services .box-container .box {
  max-height: 350px;
  text-align: center;
  background: #fff;
  border: 0.2rem solid #334;
  border-radius: 5px;
  -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  padding: 3rem 2rem;
}

.services .box-container .box:hover {
  background: #334;
}

.services .box-container .box:hover h3 {
  color: #fff;
}

.services .box-container .box:hover p {
  color: #fff;
}

.services .box-container .box img {
  height: 7rem;
  margin-bottom: .5rem;
}

.services .box-container .box h3 {
  font-size:18px;
  text-transform: capitalize;
  color: #334;
  padding: 1rem 0;
}

.services .box-container .box p {
  font-size: 13px;
  line-height: 2;
  color: #777;
}
.fun-fact {
  margin-top: 20px;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (minmax(25rem, 1fr))[auto-fit];
      grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  gap: 2rem;
  background-image: radial-gradient(circle at top left,#EC352E,#5454eb);
  background-origin: border-box;
  background-clip: content-box,border-box;
  gap: 3.5rem;
}

.fun-fact .box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  gap: 2rem;
}

.fun-fact .box img {
  height: 9rem;
}

.fun-fact .box h3 {
  font-size: 2rem;
  text-transform: capitalize;
  color: #fff;
  text-align: center;
}

.fun-fact .box p {
  font-size: 1.5rem;
  line-height: 2;
  color: #fff;
  padding-top: .5rem;
}
@media (max-width: 991px) {
  .services h1{
    font-size: 25px;
  }
  .services .box-container .box {
  max-height: 230px;
  border: 0.1rem solid #334;
  padding: 1rem 1rem;
  margin-bottom: 5px;
  }
.services .box-container {
  display: block;
  }
  .fun-fact {
  margin-top: 10px;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (minmax(15rem, 1fr))[auto-fit];
      grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: .5rem;
  }
  .fun-fact .box {
  gap: 1rem;
  }
  .fun-fact .box img {
  height: 5rem;
  }
  .fun-fact .box h3 {
  font-size: 1.5rem;
  text-align: left;
  }
  .fun-fact .box p {
  font-size: 1rem;
  line-height: 2;
  padding-top: .3rem;
  } 
}
</style>