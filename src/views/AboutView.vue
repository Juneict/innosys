<template>
  <section class="about" id="about">
    <div class="content">
      <h3>ICT Technology Solution</h3>
      <p>
          ICT Technology Solution အဖြစ် 2006 ခုနှစ်တွင် စတင်တည်ထောင်ခဲ့ပြီး ယခုတိုင် အကောင်းဆုံးသော ဝန်ဆောင်မှုများကို ဆောင်ရွှက်ပေးလျှက်ရှိပါသည်။Laptop, Desktop,Printer,Projector များအပြင် ကွန်ပျူတာနှင့်ဆက်စပ်သော Accessories များစွာကို ဖြန့်ချီရောင်းချလျှက်ရှိပါသည်။ထိုအပြင် အတွေ့အကြုံရှိပြီး အရည်အချင်းပြည့်ဝသော ပညာရှင်များဖြင့်လည်း Laptop Service, Desktop Service, Printer, Networking, CCTV Installation များနှင့် Web application Development များကိုလည်းဝန်ဆောင်မှုပေးလျှက်ရှိပါသည်။
      </p>
      <p>
          Innosys Technology သည် ကျွန်ုပ်တို့၏တန်ဖိုးရှိသောဖောက်သည်များအား အရည်အသွေးမြင့်မားသော ကုန်ကျစရိတ်သက်သာသောဖြေရှင်းချက်ကို ပေးဆောင်ရန် ဆန်းသစ်သောနည်းပညာဝန်ဆောင်မှုကုမ္ပဏီတစ်ခုဖြစ်သည်။ ကျွန်ုပ်တို့၏ပန်းတိုင်သည် သုံးစွဲသူတိုင်း၏မျှော်လင့်ချက်ကို ကျော်လွန်ရန်ဖြစ်သည်။
          <ul>
            <li>ထူးထူးခြားခြား ဖောက်သည်ဝန်ဆောင်မှုကို ပေးဆောင်သည်။</li>
            <li>ရိုးရှင်းစေပြီး လုပ်ဆောင်ချက်စွမ်းဆောင်ရည်ကို မြှင့်တင်ပေးပါသည်။</li>
            <li>ကျွန်ုပ်တို့၏ဖောက်သည်များကို သူတို့လိုအပ်သလို မြန်မြန်ဆန်ဆန်တုံ့ပြန်ပေးပါသည်။</li>
            <li>ကျွန်ုပ်တို့၏ဖောက်သည်များအတွက် ယုံကြည်စိတ်ချရပြီး မြန်ဆန်သော ဖောက်သည်ဝန်ဆောင်မှုကို ပေးဆောင်စေပါသည်။</li>
          </ul>
      </p>
       <p class="text-confit">၎င်းသည် ကျွန်ုပ်တို့၏ဖောက်သည်များ၏ လုပ်ငန်းဆောင်ရွက်မှု၏ စွမ်းဆောင်ရည်နှင့် ကုန်ထုတ်စွမ်းအားကို မြှင့်တင်ပေးပါသည်။</p>
      <!-- <h3>Our Aim</h3>
      <p>
        ကျွန်ုပ်တို့၏ဖောက်သည်များ၏လိုအပ်ချက်များကို နားလည်ပြီး ကျေနပ်စေသော အကောင်းဆုံးစီးပွားရေးဖြေရှင်းချက်နှင့် ဝန်ဆောင်မှုပေးသူဖြစ်လာရန်
      </p>
      <h3>Our Mission</h3>
      <ul>
        <li>ကျွန်ုပ်တို့၏ဖောက်သည်များအတွက် လုပ်ငန်းဖြေရှင်းချက်နှင့် ဝန်ဆောင်မှုကို ပေးဆောင်ရန်</li>
        <li>ထူးချွန်သော ဝန်ဆောင်မှုနှင့် ထုတ်ကုန်များကို ပံ့ပိုးပေးခြင်းဖြင့် ရေရှည်ဖောက်သည်ဆက်ဆံရေးကို ဖန်တီးပြီး ရေရှည်တည်တံ့စေရန်</li>
        <li>ကျွန်ုပ်တို့၏ client ကို လိုအပ်သလို ဖန်တီးပြီး ပံ့ပိုးခြင်းဖြင့် ကျွန်ုပ်တို့၏ကွန်ရက်ကို ချဲ့ထွင်ရန်</li>
      </ul> -->
      
    </div>

    <div class="image">
      <img src="../assets/home.jpg" alt="" />
    </div>
  </section>
  <FooterView></FooterView>
 
</template>
<script>
// @ is an alias to /src
import FooterView from './FooterView.vue'

export default {
  components:{
      FooterView
    }
}
</script>

<style>

.about {
  display: -webkit-box;
  display: -ms-flexbox;
  padding: 50px;
  margin-left: 50px;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -ms-flex-wrap: wrap-reverse;
      flex-wrap: wrap-reverse;
  gap: 3rem;
}

.about .image {
  -webkit-box-flex: 1;
      -ms-flex: 1 1 35rem;
          flex: 1 1 35rem;
}

.about .image img {
  width: 560px;
  height: 350px;
  margin: auto;
  align-content: center;
  border-radius: 20px 60px 20px 60px;
}

.about .content {
  -webkit-box-flex: 1;
      -ms-flex: 1 1 42rem;
          flex: 1 1 42rem;
}

.about .content h3 {
  font-size: 2rem;
  text-transform: capitalize;
  background:  -webkit-linear-gradient(#EC352E, #5454eb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;;
}

.about .content p {
  font-size: 1rem;
  text-align: left;
  justify-content: end;
  line-height: 2;
  color: #353c5c;
 
}
.about .content ul li{
  color: #353c5c;
}
@media (max-width: 991px) {
  .about {
  padding: 10px;
  margin-left: 10px;
  gap: 1rem;
  display: block;
  }
  .about .image img {
    display: none;
  }
  .about .content h3 {
  font-size: 1rem;
  padding-bottom: .5rem;
  }
  .about .content p {
  font-size: 12px;
  line-height: 2;
  color: #353c5c;
  padding: 1rem 0;
  }
  .about .content ul li{
   font-size: 12px;
}
}
</style>