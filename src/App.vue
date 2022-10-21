<template>
  <div class="container">
    <div class="menu">
      <nav>
        <img alt="logo" class="logo"  src="./assets/logo3.png">
        <router-link to="/contact" class="nav-item"><i class="fa-solid fa-address-book"></i><span class="nav-text"> Contact</span> </router-link> 
        <router-link to="/gallery" class="nav-item"><i class="fa-solid fa-image"></i><span class="nav-text">  Gallery</span></router-link> 
        <router-link to="/about" class="nav-item"><i class="fa-solid fa-users"></i><span class="nav-text">  About Us</span></router-link>
        <router-link to="/services" class="nav-item"><i class="fa-solid fa-gears"></i> <span class="nav-text">  Services</span></router-link> 
        <router-link to="/" class="nav-item"><i class="fa-solid fa-house-user"></i><span class="nav-text">  Home</span></router-link> 
      </nav>
    </div>
    <router-view></router-view>
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>
<script>

export default {
  mounted () {
    //  [App.vue specific] When App.vue is finish loading finish the progress bar
    this.$Progress.finish()
  },
  
}

</script>
<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}
nav a {
  font-weight: bold;
  text-decoration: none;
  color: #353c5c;
  cursor: pointer;
  padding-right: 20px;
  text-align: center;
  margin-left: 40px;
  float: right;
  margin-top: 20px;
}


nav a.router-link-exact-active {
  color: #EC352E;
}
.logo{
  width: 150px;
  height: 40px;
  margin-top: 10px;
  margin-left: 5px;
}
.banner{
  width: 40%;
  top: 25%;
  left: 150px;
  position: absolute;
  color: #EC352E;
}
.app-text{
  width: 50%;
  float: left;
}
.app-text h1{
  font-size: 43px;
  width: 540px;
  position: relative;
  margin-left: 40px;
  background:  -webkit-linear-gradient(#EC352E, #5454eb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;;
}
.app-text p{
  width: 450px;
  font-size: 15px;
  margin: 30px 0 30px 40px;
  line-height: 25px;
  color: #353c5c;
}
.app-picture{
  width: 50%;
  float: right;
}
.btn{
  margin: 30px 0 30px 40px;
  color: #353c5c;
  border: 2px solid transparent;
  border-radius: 20px;
  background-image: linear-gradient(#fff,#fff),radial-gradient(circle at top left,#EC352E,#5454eb);
  background-origin: border-box;
  background-clip: content-box,border-box;
}
.btn span{
  display: block;
  padding: 8px 22px;
  border-radius: 20px;
}
.app-picture img{
  width: 80%;
  margin-top: 30px;
  padding-left: 50px;
  border: none;
}
.quick-links{
  left: 0;
  bottom: 0;
  position: absolute;
  background-image: radial-gradient(circle at top left,#EC352E,#5454eb);
  background-origin: border-box;
  border-radius: 0 20px 0 0;
  background-clip: content-box,border-box;
  color: #fff;
}
.quick-links ul{
  display: inline-flex;
  margin: 25px auto;
  text-align: center;
}
.quick-links li{
  list-style: none;
  margin: 0 50px;
  cursor: pointer;
}
.quick-links ul li .fa{
  font-size: 45px;
  color: #fff;
}
.quick-links ul li p{
  margin-top: 15px;
  font-size: 13px;
}
.social-icons{
  right: 72px;
  bottom: 35px;
  position: absolute;
}
.social-icons ul li{
  list-style: none;
  margin-top: 15px;
  text-align: center;
}
.social-icons ul li a{
  color: #353c5c;
  border-radius: 50%;
  border: 1px solid #353c5c;
  padding: 5px;
  display: block;
}

/* responsive */

@media (max-width: 991px) {
  nav .nav-item{
    padding: 10px;
    margin: 10px;
    color: #353c5c;
    border-radius:5px 0 0 5px ;
    
  }
  nav .nav-text{
    display: none;
  }
  nav a {
  padding-right: 0px;
  margin-left: 0px;
  float: right;
  margin-top: 30px;
  font-size: 20px;
  }
  .banner{
  width: 100%;
  top:15%;
  left: 0px;
  position: absolute;

  }
  .app-text{
  width: 100%;
  }
  .app-picture{
  width: 100%;
  border: none;
  top: 43%;
  position: absolute;
  }
  .app-text h1{
  font-size: 8px;
  width: 80%;
  position: relative;
  margin-left: 10px;
  }
  .app-text p{
  width: 450px;
  font-size: 15px;
  margin: 10px 0 10px 15px;
  padding-left: 5px;
  line-height: 20px;
  }
  .btn{
  margin: 5px 5px 10px 10px;
  }
  .btn span{
  padding: 4px 10px;
  }
  .quick-links{
  left: 0;
  bottom: 0;
  top: 90%;
  right: 20%;
  position: absolute;
  }
  .quick-links ul{
  display: inline-flex;
  margin: 8px;
  text-align: center;
  }
  .quick-links li{
  margin: 0 5px;
  }
  .quick-links ul li p{
  margin-top: 5px;
  font-size: 10px;
  }
  .social-icons{
  right: 20px;
  bottom: 15px;
  position: absolute;
}
}
</style>
