<template>
  <div class="row">
    <div>
      <h1>Animations</h1>
      <hr>
      <button class="btn btn-primary" @click="show = !show">Show Alert</button>
      <br>
      <select v-model="animationName">
        <option value="fade">Fade</option>
        <option value="slide">Slide</option>
      </select>
      <br><br>
      <transition :name="animationName" appear>
        <div class="alert alert-info" v-if="show" >Ene bol fade transition</div>
      </transition>
      <transition name="slide" type="transition" appear>
        <div class="alert alert-info" v-if="show">Ene bol animation ba transition</div>
      </transition>
      <transition  appear 
      enter-to-class="animated bounce"
      leave-to-class="animated shake"
      >
        <div class="alert alert-info" v-if="show">Ene bol animated ashiglav.</div>
      </transition>
      <transition :name="animationName" appear>
        <div class="alert alert-info" v-if="show" key="true">unen</div>
        <div class="alert alert-info" v-else key="false">hudal</div>
      </transition>
      <button class="btn btn-primary" @click="load = !load">Load/ Remove</button>
      <br><br>
      <transition
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:after-enter="afterEnter"
      v-on:enter-cancelled="enterCancelled"

      v-on:before-leave="beforeLeave"
      v-on:leave="leave"
      v-on:after-leave="afterLeave"
      v-on:leave-cancelled="leaveCancelled"
      appear
      >
        <div style="width: 100px; height: 100px; background-color: green;" v-if="load"></div>
      </transition>
      <br><br>
      <button class="btn btn-primary" @click="selectedComponent == 'app-success-alert' ? selectedComponent = 'app-danger-alert' : selectedComponent = 'app-success-alert'"  > Component songoh </button>
      <transition name="fade" mode="out-in">
        <component :is="selectedComponent"> </component>
      </transition>
      <br><br>
      <button class="btn btn-primary" @click="addNumber">Sanamsargui too jagsaaltand nemeh</button>
      <br></br>
      <ul class="list-group">
        <transition-group name="slide">
            <li class="list-group-item" 
            v-for="(number,index) in numbers" 
            @click="removeNumber(index)"
            style="cursor: pointer"
            :key="number"
            >{{ number }}
            </li>
    </transition-group>
      </ul>
    </div>
  </div>
</template>

<script>
  import DangerAlert from './DangerAlert.vue';
  import SuccessAlert from './SuccessAlert.vue';
export default {
  data(){
    return {
      show : true,
      animationName: "fade",
      key: '',
      load:true,
      elementWidth: 100,
      selectedComponent: "app-success-alert",
      numbers:[1,2,3,4,5,6]
    }
  },
  methods:{
    beforeEnter(eL){
      console.log("beforeEnter")
      this.elementWidth = 100;
      eL.style.width = this.elementWidth + 'px';
    },
    enter(eL, done){
      console.log("enter");
      let round = 1;
      const interval = setInterval(() => {
        eL.style.width = (this.elementWidth + round * 10) + 'px';
        round++;
        if(round > 20){
          clearInterval(interval);
          done();
        }
      },20)
    },
    afterEnter(eL){
      console.log("afterEnter")
    },
    enterCancelled(eL){
      console.log("enterCancelled")
    },
    beforeLeave(eL){
      this.elementWidth = 300;
      eL.style.width = this.elementWidth + 'px'
      console.log("beforeLeave")
    },
    leave(eL,done){
      console.log("Leave")
      let round = 1;
      const interval = setInterval(() => {
        eL.style.width = (this.elementWidth + round * 10) + 'px';
        round--;
        if(round > 20){
          clearInterval(interval);
          done();
        }
      },20)
    },
    afterLeave(eL){
      console.log("afterLeave")
    },
    leaveCancelled(eL){
      console.log("leaveCancelled")
    },
    addNumber(){
      const pos = Math.floor(Math.random() * this.numbers.length)
      this.numbers.splice(pos, 0 , this.numbers.length + 1)
    },
    removeNumber(index){
      this.numbers.splice(index, 1)
    }

  },
  components:{
    appDangerAlert: DangerAlert,
    appSuccessAlert: SuccessAlert
  }
}
</script>

<style>
  .fade-enter{
    opacity: 0;
  }
  .fade-enter-active{
    transition: opacity 1s;
  }
  .fade-leave{

  }
  .fade-leave-active{
    transition: opacity 1s;
    opacity: 0;
  }
  .slide-enter{
   
  }
  .slide-enter-active{
    animation: slide-in 3s ease-in forwards;
  }
  .slide-move{
    transition: transform 1s;
  }
  .slide-leave{
   
  }
  .slide-leave-active{
    animation: slide-out 1s ease-out forwards;
    transition: opacity 1s;
    opacity: 0;
    position: absolute
  }
  @keyframes slide-in {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(20px);
    }
  }
  @keyframes slide-out{
    from {
      transform: translateY(0);
    }
     to {
      transform: translateY(20px);
    }
  }
</style>