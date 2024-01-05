<template>
  <div>
    <NavBar top-nav="You Are Done!" />
    <div>
      <h1>
        Hey, {{ userInputStore.userName }}! You scored {{ scoreStore.score }} out of 10
      </h1>
      <router-link v-if="scoreStore.score >= 7" to="/">
        <img src="../img/happyface.png" @click="restartQuiz" />
      </router-link>
      <h2 v-if="scoreStore.score >= 7">Congratulations!!!</h2>
      <div class="gif" v-else>
        <img v-if="scoreStore.score < 7" src="../img/sadface.gif" @click="restartQuiz" />
        <h2 v-if="scoreStore.score < 7">Only {{ scoreStore.score }} {{ userInputStore.userName }}. Try Again!!!</h2>
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
    import NavBar from '../components/NavBar.vue';
    import { useScoreStore } from '../plugin/scoreStore'
    import { useUserInputStore } from '../plugin/userInputStore';
    import router from '../router';


    const scoreStore = useScoreStore();
    const userInputStore = useUserInputStore();


    const restartQuiz = () => {
  scoreStore.resetScore(); 
  router.push('/'); 
};


</script>

  
  <style scoped>

</style>

  