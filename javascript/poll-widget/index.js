let poll = {
    question: 'what is your favorite programming language?',
    answers: ['C', 'C++', 'C#', 'Java'],
    selectedAnswer: -1,
    answerWeight: [4, 3, 5, 8],
    pollTotal: 20
}

let pollDOM = {
    question: document.querySelector('.question'),
    answers: document.querySelector('.answers')
}

pollDOM.question.innerText = poll.question;
pollDOM.answers.innerHTML = poll.answers.map((answer, i) => {
    return (
        `
        <div class="answer" onClick="makeSelected('${i}')"> ${answer}
            <span class="percentage-bar"></span>
            <span class="percentage-value"></span>
        </div>
        `
    )
}).join('')

function makeSelected(i){
    poll.selectedAnswer = +i;
    try{
        document.querySelector('.poll .answers .answer.selected').classList.remove('selected')
    }catch(msg){
        console.log(msg)
    }
    document.querySelectorAll('.poll .answers .answer')[+i].classList.add('selected');
    showResult()
}

function showResult(){
    let answers = document.querySelectorAll('.poll .answers .answer')
    for(let i = 0; i < answers.length; i++){
        let percentage = 0;
        if(i == poll.selectedAnswer){
            
            percentage = Math.round((poll.answerWeight[i] + 1) *100 / (poll.pollTotal+1))
        }else{
            percentage = Math.round((poll.answerWeight[i]) *100 / (poll.pollTotal+1))
        }
        answers[i].querySelector('.percentage-bar').style.width = percentage + '%' 
        answers[i].querySelector('.percentage-value').innerText = percentage + '%' 

    }
}