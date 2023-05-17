




<template>
  
  <div>
    
    <h1 v-html="this.question"></h1>
    

    <div class="form-check">
  <input class="form-check-input" type="radio" name="options"  value="True" >
  <label class="form-check-label" >
    True
  </label>
</div>

  
<div class="form-check">
  <input class="form-check-input" type="radio" name="options"  value="False" >
  <label class="form-check-label" >
    False
  </label>
</div>




  <button class="send btn btn-success" type="button"> Send</button><br>
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
      incorrectAnswer:undefined,
      correctAnswer:undefined
     
      
    }
  },
created(){
  this.axios 
  .get('https://opentdb.com/api.php?amount=1&category=11&type=boolean')
  .then((response) => {
    this.question = response.data.results[0].question;
    this.incorrectAnswer = response.data.results[0].incorrect_answers[0];
    this.correctAnswer = response.data.results[0].correct_answer;
    
  })
  
}

}

</script>