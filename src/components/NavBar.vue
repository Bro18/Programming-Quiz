<template>
     <div>
        <h1 style="margin: 1;"
        class="topnav">{{ topNav }}
        </h1>
    </div>   
</template>
  
  
<script setup lang="ts">

    defineProps({
        topNav: String
})
  </script>

  <style scoped>

.topnav header {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
.topnav {
  overflow: hidden;
  background-color: rgb(74, 162, 159);
  font-size: 2rem;
  font-weight: 900;
}
  </style>