<template>
  <div class="top-nav">
    <NavBar top-nav="WELCOME!" />
    <ParaText :home-text="quizParag"></ParaText>
    <ParaText :text-flipped="quizParag"></ParaText>
<div class="welcome-img">
  <img src="../img/welcome.png"/>
</div>
    <div class="button-input">
      <label style="color: white; font-weight: bold; font-size: xx-large; -webkit-text-stroke-width: 0.1px;
        -webkit-text-stroke-color: green;">Enter Your Name</label>
      <InputText v-model="myText" class="user-input"></InputText>
      <router-link :to="{ path: '/question' }" class="round-button0" @click="startQuiz">START</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBar from '../components/NavBar.vue';
import ParaText from '../components/ParaText.vue';
import { ref } from 'vue';
import { useUserInputStore } from '../plugin/userInputStore'

const quizParag = 'Programming Quiz';
const userInputStore = useUserInputStore();

const myText = ref('');

const startQuiz = () => {
  userInputStore.updateUserInput(myText.value);
};
</script>

<style scoped>
.top-nav {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}

.button-input {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-bottom: -35px; 
}

.user-input {
  margin-bottom: 330px;
}

.welcome-img {
width: 1200px;
height: 1200px;
}

</style>
