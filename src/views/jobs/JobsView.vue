<template>
  <h2>JOBS</h2>
  <div v-for="job in jobs" :key="job.id" class="jobs">
    <router-link :to="{name: 'jobsDetail', params:{id:job.id}}">
      <h2>{{job.title}}</h2>
      </router-link>
  </div>
</template>

<script>
export default {
  data(){
    return{
      jobs:[
        {title:'test1', id:1, details:'abc1'},
        {title:'test2', id:2, details:'abc2'},
        {title:'test3', id:3, details:'abc3'},
      ],
    }
  }
}
</script>

<style>
.jobs h2{
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}

.jobs h2:hover{
  background: #ddd;
}

.jobs a{
  text-decoration: none;
}
</style>