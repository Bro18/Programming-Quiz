<template>
    <div style="padding-left:16px">
    <p style=""
         class="paratext">{{ $props.paraText }}
    </p>
    <p class="paratext1">{{ $props.paraText1 }}
      </p>
    <p class="hometext">{{ $props.homeText }}
    </p>
    <p class="textflipped">{{ $props.textFlipped }}
    </p>
   </div>   
</template>
 
  
  <script setup lang="ts">
    defineProps({
    paraText: String,
    paraText1: String,
    homeText: String,
    textFlipped: String,
  })
  </script>
  
<style scoped>

.paratext {
position: fixed;
bottom: 50%;
font-size:40px;
font-weight: bold;
}

.paratext1 {
  color: #44443b;
  font-style: oblique;
  position: fixed;
  bottom: 45%;
  font-size:40px;
  font-weight: bold;
  font-size: xx-large;
}

.hometext {
  position: fixed;
  bottom: 40%;
  font-size:40px;
  font-weight: bold;
}

.textflipped {
  display: inline-block;
  transform: scaleY(-1);
  -webkit-transform: scaleY(-1);
  -ms-transform: scaleY(-1);
  -o-transform: scaleY(-1);
  color: rgb(74, 162, 159);
  position: fixed;
  bottom: 34%;
  font-size:40px;
  font-weight: bold;
}
div {
  display: flex;
  justify-content: center;
  align-items: center;
}
p {
  padding: 50px;
}
  </style>