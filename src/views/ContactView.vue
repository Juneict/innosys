<template>
  <section class="contact" id="contact">

<h1 class="heading"> <span>Contact</span> Us </h1>

<div class="row">

    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3772.9241315449!2d94.92879865415568!3d20.143221020018675!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x19f3b160e3db1617!2sICT%20Computer%20Solution%20Center!5e0!3m2!1sen!2ssg!4v1665998578817!5m2!1sen!2ssg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

   <form action="">
      <h3>get in touch</h3>
      <div class="inputBox">
         <input type="text" placeholder="name">
         <input type="email" placeholder="email">
      </div>
      <div class="inputBox">
         <input type="number" placeholder="phone">
         <input type="text" placeholder="subject">
      </div>
      <textarea name="" placeholder="message" id="" cols="30" rows="10"></textarea>
      <input type="submit" value="send message" class="btn-send">
   </form>

</div>

</section>

<!-- <FooterView/> -->
</template>

<script >
// import FooterView from './FooterView.vue'
export default {
    components:{
        // FooterView
    }
}
</script>

<style>
.btn-send{
    padding: 5px;
}
.contact{
   padding: 35px;
   margin-bottom: 100px;
}
.contact h1{
  font-size: 30px;
  text-align: center;
  margin-bottom: 15px;
  background:  -webkit-linear-gradient(#EC352E, #5454eb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;;
}
.contact .row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  gap: 1rem;
}

.contact .row .map {
  -webkit-box-flex: 1;
      -ms-flex: 1 1 15rem;
          flex: 1 1 15;
  width: 100%;
}

.contact .row form {
  -webkit-box-flex: 1;
      -ms-flex: 1 1 10rem;
          flex: 1 1 10rem;
  padding: 1rem;
  
}

.contact .row form h3 {
  
  text-transform: capitalize;
  color: #334;
}

.contact .row form .inputBox {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

.contact .row form .inputBox input {
  width: 49%;
}

.contact .row form .inputBox input, .contact .row form textarea {
  padding: .5rem .5rem;
  color: #777;
  margin: .7rem 0;

}

.contact .row form .inputBox input:focus, .contact .row form textarea:focus {
  background: #334;
  color: #fff;
}

.contact .row form .inputBox input:focus::-webkit-input-placeholder, .contact .row form textarea:focus::-webkit-input-placeholder {
  color: #fff;
}

.contact .row form .inputBox input:focus:-ms-input-placeholder, .contact .row form textarea:focus:-ms-input-placeholder {
  color: #fff;
}

.contact .row form .inputBox input:focus::-ms-input-placeholder, .contact .row form textarea:focus::-ms-input-placeholder {
  color: #fff;
}

.contact .row form .inputBox input:focus::placeholder, .contact .row form textarea:focus::placeholder {
  color: #fff;
}

.contact .row form textarea {
  width: 100%;
  height: 5rem;
  resize: none;
}
@media (max-width: 991px) {

}
</style>