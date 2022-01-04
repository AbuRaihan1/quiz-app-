//firstpage

const startQuiz = document.querySelector(".btn");
const rules= document.querySelector(".rules");
const mainPage = document.querySelector(".main");
const exitButton = document.querySelector(".btn1");
const continues = document.querySelector(".btn2");
const firstQuestion = document.querySelector(".first-question");
const nextQuestion = document.querySelector(".next-que");
const WhatHtml = document.querySelector(".whatHtml");
const myOption = document.querySelector(".options");
const timeLine = document.querySelector("progressBar");

startQuiz.onclick = () =>{
  mainPage.classList.add("mainHide")
  rules.classList.add("active");
   
}


exitButton.onclick = () =>{
  mainPage.classList.add("mainShow") 
  rules.classList.remove("active") 
}


continues.onclick = () =>{
  rules.classList.remove("active")
  firstQuestion.classList.add("active-firstQue")
  showQuestion(0)
  startTimer(15)
}


// timer develop

timevalue = 15;
const timeCount = document.querySelector("#timer");
let counter;
function startTimer(time){
  counter = setInterval(timer, 1000);
  function timer(){
    timeCount.textContent = time;
    time--

    if(time <9){
       timeCount.textContent = 0 + timeCount.textContent
    }
    if(time <0 ){
    timeCount.textContent ='00';
  }
}

}


let queCount = 0;
nextQuestion.onclick = (a) =>{

  if(queCount <Question.length -1){
      queCount++
      showQuestion(queCount)
      clearInterval(counter)
      startTimer(timevalue)
 }else{
    console.log("the task is end")
  }

}
  

// answering first page 

function showQuestion(index){
 const queTag = Question[index].numb + ". " + Question[index].question;
 WhatHtml.innerHTML = queTag

 myOption.innerHTML = "<li>" +Question[index].options[0]  + "</li>"
                      + "<li>" +Question[index].options[1]  + "</li>"
                      + "<li>" +Question[index].options[2]  + "</li>"
                      + "<li>" +Question[index].options[3]  + "</li>"

  const bottomQuestion = document.querySelector(".bottomNum");
  bottomQuestion.innerHTML = Question[index].numb + " of " + Question.length;


  const mcq = myOption.querySelectorAll("li");
  for(let lop = 0; lop<mcq.length; lop++){
    mcq[lop].setAttribute("onclick", "optionSelected(this)")
  }

}

const tickIcon = '<div class="tickIcon"><i class="fas fa-check-circle"></i></div>'
const crossIcon = '<div class="crossIcon"><i class="fas fa-times-circle"></i></div>'

function optionSelected(answer){
  clearInterval(counter)
  let userAns = answer.textContent;
  let correctAns = Question[queCount].answer;


  if(userAns == correctAns ){
    answer.classList.add("correctAnsColor");
    answer.insertAdjacentHTML("beforeend", tickIcon)

  }else{   
    answer.classList.add("wrongAns")
    answer.insertAdjacentHTML("beforeend", crossIcon)
  }
  
  
}


// counter line developing 
