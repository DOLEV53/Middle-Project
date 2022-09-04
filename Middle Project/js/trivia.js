let trivia = [
  {
    question:
      "What do the colors of Mardi Gras stand for? Green is for _____, gold means______and purple symbolize",
    answers: ["grass , sun and flowers", "hope , value and richness of life", id = 0 , id = 1 ],
    correct: "grass,sun and flowers",
    
  },
  {
    question: "What does mardi gras mean?",
    answers: ["Big party","Fat tuesday", id = 2 , id = 3],
    correct: "Fat tuesday",
    
  },
  {
    question: "It is illegal to ride in a Mardi Gras parade without a mask?",
    answers: ["True", "False", id = 4 , id =5 ],
    correct: "True",
  },
  {
    question: `what is mardi gras also know as in some places?`,
    answers: [`Carnival`, `Fat tuesday`,id = 6 , id =7],
    correct: "Carnival",
  },
  {
    question: `True or False: mardi gras is one day?`,
    answers: [`False`, `True`,id = 8 , id =9],
    correct: "False",
  },
  {
    question: `True or False: hurrican katrina cancelled mardi gras?`,
    answers: [`True`, `False`,id = 10 , id =11],
    correct: "False",
    
  },
  {
    question: `What is the day after mardi gras?`,
    answers: [`Easter`, `Ash tuasday`,id = 12 , id =13],
    correct: "Ash tuasday",
  },
  {
    question: `when does carnival start?`,
    answers: [`The day after mardi gras`, `12 days after christmas`,id = 14 , id =15],
    correct: "12 days after christmas",
  },
  {
    question: `What happens if you find the baby in your king's cake?`,
    answers: [`You have to obring the king's cake next year`, `You have to cook the food`,id = 16 , id =17],
    correct: "You have to obring the king's cake next year",
    
  },
  {
    question: `Which city in france is known for its mardi gras celebration?`,
    answers: [`Nice`, `Marseille`,id = 18 , id =19],
    correct: "Nice",
    
  },
];
console.log(trivia)
let triviaRoot = document.getElementById('trivia-q')
let counter = 0
trivia.forEach((elem,index)=>{
for(x=0;x<1;x++){
triviaRoot.innerHTML +=
    ` <div class="class_div" id="q_${index}">
    <div>${elem.question}</div>
    <div class="form-check">
        <input class="form-check-input question" type="radio" name="radio" id="radio_${elem.answers[2]}">
        <label class="form-check-label" for="radio_${elem.answers[2]}">${elem.answers[0]}</label>
    </div>
    <div class="form-check">
        <input class="form-check-input question" type="radio" name="radio" id="radio_${elem.answers[3]}">
        <label class="form-check-label" for="radio_${elem.answers[3]}">${elem.answers[1]}</label>
    </div>
</div>`
};


let questions = document.querySelectorAll('.question');
let counter = 0;
questions.forEach((eachInput)=>{
eachInput.addEventListener("change", ()=>{
// משתנה ל קאונטר
let id_score = document.querySelector("#id_score");
    // q - 0
    if(document.querySelector('#radio_0').checked){
        document.querySelector('#q_0').style.backgroundColor = 'green'
        document.querySelector('#radio_0').disabled = true
        document.querySelector('#radio_1').disabled = true
        counter+= 10;
        id_score.innerHTML = `Your score is : ` + counter;
    }
    if(document.querySelector('#radio_1').checked){
        document.querySelector('#q_0').style.backgroundColor = 'red'
        document.querySelector('#radio_0').disabled = true
        document.querySelector('#radio_1').disabled = true

    }

    // q-1
    if(document.querySelector('#radio_2').checked){
        document.querySelector('#q_1').style.backgroundColor = 'red'
        document.querySelector('#radio_2').disabled = true
        document.querySelector('#radio_3').disabled = true
    }
    if(document.querySelector('#radio_3').checked){
        document.querySelector('#q_1').style.backgroundColor = 'green'
        document.querySelector('#radio_2').disabled = true
        document.querySelector('#radio_3').disabled = true
        counter += 10;
        id_score.innerHTML = `Your score is : ` + counter;
    }

    // q-2
    if(document.querySelector('#radio_4').checked){
        document.querySelector('#q_2').style.backgroundColor = 'green'
        document.querySelector('#radio_4').disabled = true
        document.querySelector('#radio_5').disabled = true
        counter += 10;
        id_score.innerHTML = `Your score is : ` + counter;
    }
    if(document.querySelector('#radio_5').checked){
        document.querySelector('#q_2').style.backgroundColor = 'red'
        document.querySelector('#radio_4').disabled = true
        document.querySelector('#radio_5').disabled = true
      
    }
    
    // q-3
    
    if(document.querySelector('#radio_6').checked){
        document.querySelector('#q_3').style.backgroundColor = 'green'
        document.querySelector('#radio_6').disabled = true
        document.querySelector('#radio_7').disabled = true
        counter += 10;
        id_score.innerHTML = `Your score is : ` + counter;
    }
    if(document.querySelector('#radio_7').checked){
        document.querySelector('#q_3').style.backgroundColor = 'red'
        document.querySelector('#radio_6').disabled = true
        document.querySelector('#radio_7').disabled = true
      
    }

     // q-4
    if(document.querySelector('#radio_8').checked){
        document.querySelector('#q_4').style.backgroundColor = 'green'
        document.querySelector('#radio_8').disabled = true
        document.querySelector('#radio_9').disabled = true
        counter += 10;
        id_score.innerHTML = `Your score is : ` + counter;
    }
    if(document.querySelector('#radio_9').checked){
        document.querySelector('#q_4').style.backgroundColor = 'red'
        document.querySelector('#radio_8').disabled = true
        document.querySelector('#radio_9').disabled = true
      
    }
    
    // q-5
    if(document.querySelector('#radio_10').checked){
        document.querySelector('#q_5').style.backgroundColor = 'red'
        document.querySelector('#radio_10').disabled = true
        document.querySelector('#radio_11').disabled = true
        
    }
    if(document.querySelector('#radio_11').checked){
        document.querySelector('#q_5').style.backgroundColor = 'green'
        document.querySelector('#radio_10').disabled = true
        document.querySelector('#radio_11').disabled = true
        counter += 10;
        id_score.innerHTML = `Your score is : ` + counter;
    }

    // q-6
    if(document.querySelector('#radio_12').checked){
        document.querySelector('#q_6').style.backgroundColor = 'red'
        document.querySelector('#radio_12').disabled = true
        document.querySelector('#radio_13').disabled = true
        
    }
    if(document.querySelector('#radio_13').checked){
        document.querySelector('#q_6').style.backgroundColor = 'green'
        document.querySelector('#radio_12').disabled = true
        document.querySelector('#radio_13').disabled = true
        counter += 10;
        id_score.innerHTML = `Your score is : ` + counter;
    }

    // q-7
    if(document.querySelector('#radio_14').checked){
        document.querySelector('#q_7').style.backgroundColor = 'red'
        document.querySelector('#radio_14').disabled = true
        document.querySelector('#radio_15').disabled = true
        
    }
    if(document.querySelector('#radio_15').checked){
        document.querySelector('#q_7').style.backgroundColor = 'green'
        document.querySelector('#radio_14').disabled = true
        document.querySelector('#radio_15').disabled = true
        counter += 10;
        id_score.innerHTML = `Your score is : ` + counter;
    }

    // q-8
     if(document.querySelector('#radio_16').checked){
        document.querySelector('#q_8').style.backgroundColor = 'green'
        document.querySelector('#radio_16').disabled = true
        document.querySelector('#radio_17').disabled = true
        counter += 10;
        id_score.innerHTML = `Your score is : ` + counter;
    }
    if(document.querySelector('#radio_17').checked){
        document.querySelector('#q_8').style.backgroundColor = 'red'
        document.querySelector('#radio_16').disabled = true
        document.querySelector('#radio_17').disabled = true
        
    }

    // q-9
    if(document.querySelector('#radio_18').checked){
        document.querySelector('#q_9').style.backgroundColor = 'green'
        document.querySelector('#radio_18').disabled = true
        document.querySelector('#radio_19').disabled = true
        counter += 10;
        id_score.innerHTML = `Your score is : ` + counter;
    }
    if(document.querySelector('#radio_19').checked){
        document.querySelector('#q_9').style.backgroundColor = 'red'
        document.querySelector('#radio_18').disabled = true
        document.querySelector('#radio_19').disabled = true
        
    }



      });
    }); 
 });



