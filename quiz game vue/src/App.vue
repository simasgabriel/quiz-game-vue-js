




<template>
  
  <div>
   
    
    <h1 v-html="this.question"></h1>
    

    <div class="form-check">
  <input :disabled="this.answerSubmitted" class="form-check-input" type="radio" name="options"  value="True" v-model="this.chosenAnswer" >
  <label class="form-check-label" >
    True
  </label>
</div>

  
<div class="form-check">
  <input :disabled="this.answerSubmitted" class="form-check-input" type="radio" name="options"  value="False" v-model="this.chosenAnswer" >
  <label class="form-check-label" >
    False
  </label>
</div>




  
  </div>
  <div class="result" v-if="this.answerSubmitted">
    <h2 v-if="this.chosenAnswer==this.correctAnswer" class="text-success">&#9989;Corret answer</h2>
    <h2 v-else class="text-danger"> &#10060;Wrong answer</h2>
    
  
  </div>
  <section v-if="this.scoreBoardOn" class="text-info" >
    <h2>Your Score is {{ correctAnswerCounter }}</h2>
      

  </section>
  <button v-if="!this.answerSubmitted" @click="this.submitAnswer()" class="send btn btn-success" type="button"> Send</button><br>
  <button v-if="this.answerSubmitted" @click="this.newQuestion()" class="nextq btn btn-primary" type="button"> Next question</button><br>
  
  
 
</template>

<style >
#app{
  font-family: Arial, Helvetica, sans-serif;
  text-align: justify;
  padding: 10px;
  margin: 10em ;
  margin-bottom: 1rem;
  border-radius: 25px;

}
</style>
<script>


export default{
  name:'App',
 

  

  data(){
    return{
      question:undefined,
      correctAnswer:undefined,
      chosenAnswer:undefined,
      answerSubmitted:false,
      scoreBoardOn: false,
      correctAnswerCounter:0
     
      
    }
  },
  methods:{
    submitAnswer(){
      this.answerSubmitted=true;
      this.scoreBoardOn=true;
      if (this.chosenAnswer==this.correctAnswer){
        this.correctAnswerCounter++;
        
      }
            
      
    },
    newQuestion(){
    
  this.axios 
  .get('https://opentdb.com/api.php?amount=1&category=11&type=boolean')
  .then((response) => {
    this.question = response.data.results[0].question;
    this.correctAnswer = response.data.results[0].correct_answer;
    
  })
  this.answerSubmitted=false;

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