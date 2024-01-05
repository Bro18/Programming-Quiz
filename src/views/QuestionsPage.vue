<template>
  <div>
    <NavBar  :top-nav="'Question ' + (questionsIndex + 1)" />
      <ParaText :para-text="questions[questionsIndex].questions" />
        <ParaText para-text1="You have 2 options." />
          <div class="button-container">
            <button style="font-weight: 900;"
        v-for="(option, index) in questions[questionsIndex].options"
        :key="index"
        :disabled="selectedAnswer === index"
        @click="selectAnswer(index)"
        :class="{
          'round-button-selected-green': selectedAnswer === index,
          'round-button2': index === 0,
          'round-button3': index === 1}">{{ option }}</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import NavBar from '../components/NavBar.vue';
import ParaText from '../components/ParaText.vue';
import router from '../router';
import { useScoreStore } from '../plugin/scoreStore';

const scoreStore = useScoreStore();
const selectedAnswer = ref<number>(-1);

const selectAnswer = (answerIndex: number) => {
  if (questions.value[questionsIndex.value].answerIndex === answerIndex) {
    scoreStore.updateScore(scoreStore.score + 1);
  }

  console.log('Live Score:', scoreStore.score);

  questions.value[questionsIndex.value].answerIndex = answerIndex;

  if (questionsIndex.value === questions.value.length - 1) {
    console.log('Done');
    showScore.value = true;
    setTimeout(() => {
      router.push('/results');
    }, 1000);
  } else {
    questionsIndex.value++;
  }
};

const questionsIndex = ref(0);
const showScore = ref(false);
const questions = ref([
  {
    questions: 'What is Data Structure?',
    options: ['Collection of Structure', 'Format Storage'],
    answerIndex: 1
  },
  {
    questions: 'What is Cross-platform?',
    options: ['Application between software', 'Application between people'],
    answerIndex: 0
  },
  {
    questions: 'What does OOPs stand for?',
    options: ['Object-Oriented Programming System', 'Object-Oriented Programming Strategies'],
    answerIndex: 0
  },
  {
    questions: 'What is Snake Case?',
    options: ['Separated by an underscore', 'Separated by a dash'],
    answerIndex: 0
  },
  {
    questions: 'What does the term "Nesting" mean in programming?',
    options: ['Clean and organize', 'Methods inside another'],
    answerIndex: 1
  },
  {
    questions: 'What does CSS stand for?',
    options: ['Computer Style Sheets', 'Cascading Style Sheets'],
    answerIndex: 1
  },
  {
    questions: 'How do you insert COMMENTS in Java code?',
    options: ['// This is a coment', '#This is a comment'],
    answerIndex: 0
  },
  {
    questions: 'What does HTML stand for?',
    options: ['Hyperlinks and Text Markup Language', 'Hyper text Markup Language'],
    answerIndex: 1
  },
  {
    questions: 'What is 1 + 1?',
    options: ['2', '11'],
    answerIndex: 0
  },
  {
    questions: 'What is Git?',
    options: ['A version control system', 'A remote repository platform'],
    answerIndex: 0
  },
])

</script>

<style scoped>

.round-button2 {
  background-color: gray;
  color: white;
  border: 2px solid #f5f5f5;
  border-radius: 25px;
  width:150px;
  height:150px;
  text-decoration:none;
  background:rgb(74, 162, 159);
  margin: 420px;
  position: relative;
  margin-right: 200px;
  margin-left: 300px;
}

.round-button3 {
  background-color: gray;
  color: white;
  border: 2px solid #f5f5f5;
  border-radius: 25%;
  width:150px;
  height:150px;
  text-decoration:none;
  background:rgb(74, 162, 159);
  position: relative;
  margin-right: 24%;
  justify-content: center;
}

.round-button2 {
  will-change: filter;
  transition: filter 650ms;
}
.round-button3 {
  will-change: filter;
  transition: filter 650ms;
}


.round-button2:hover, .round-button3:hover {
  filter: drop-shadow( 0 0 2em rgb(74, 162, 159));
}
</style>
