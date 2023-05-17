




<template>
  
  <div>
    
    <h1 v-html="this.question"></h1>
    

    <div class="form-check">
  <input class="form-check-input" type="radio" name="options"  value="True" v-model="this.chosenAnswer" >
  <label class="form-check-label" >
    True
  </label>
</div>

  
<div class="form-check">
  <input class="form-check-input" type="radio" name="options"  value="False" v-model="this.chosenAnswer" >
  <label class="form-check-label" >
    False
  </label>
</div>




  <button @click="this.submitAnswer()" class="send btn btn-success" type="button"> Send</button><br>
  </div>
 
</template>

<style >
#app{
  font-family: Arial, Helvetica, sans-serif;
  text-align: justify;
  padding: 10px;
  margin: 10em ;
  margin-bottom: 1rem;

}
</style>
<script>
export default{
  name:'App',
  data(){
    return{
      question:undefined,
      correctAnswer:undefined,
      chosenAnswer:undefined
     
      
    }
  },
  methods:{
    submitAnswer(){
      if(this.chosenAnswer===this.correctAnswer){
        alert("Correct")
      }else{
        alert("Wrong")
      }
    }
  },
  

  
created(){
  this.axios 
  .get('https://opentdb.com/api.php?amount=1&category=11&type=boolean')
  .then((response) => {
    this.question = response.data.results[0].question;
    this.correctAnswer = response.data.results[0].correct_answer;
    
  })
  
}

}

</script>