let score = 0;
let startIndex = 0;

function start(btn){
    btn.disabled = 'true'
    document.getElementById('nextQues').style.display = "inline-block";

    let question = questionsArr[startIndex];

    const mySection = document.getElementById('question-section');

    const qDiv = getQuestionDiv(question, startIndex);
    mySection.appendChild(qDiv);
}

function getQuestionDiv(question, startIndex){
    const myDiv = document.createElement('div');
    myDiv.setAttribute("id", question.id);
    myDiv.setAttribute('class', 'question');

    //for questions
    const qHead = getQuestionHeading(question.text);
    myDiv.appendChild(qHead);

    //for options
    const qOptions = getQuestionOptions(question.options, startIndex);
    myDiv.appendChild(qOptions);

    //for button to check answer
    const qButton = getQuestionButton(startIndex);
    myDiv.appendChild(qButton);

    return myDiv;
}

//to render question
function getQuestionHeading(text){
    const qHead = document.createElement("h4");
    qHead.innerHTML = text;
    return qHead;
}


//to render answer options
function getQuestionOptions(options, startIndex){
    const qForm = document.createElement('form');
    qForm.setAttribute("name", "qForm" + startIndex);
    qForm.setAttribute("onsubmit", "return false");

    const qList = document.createElement('ul');
    qList.style.listStyle = 'none';

    options.forEach((opt)=>{
        const qitem = document.createElement('li');

        const qRadio = document.createElement('input');
        qRadio.setAttribute("type", "radio");
        qRadio.setAttribute("name", "qRadio" + startIndex);
        qRadio.setAttribute("value", opt);
        const qLabel = document.createElement('label');
        qLabel.innerHTML = opt;
        qLabel.style.marginLeft = '10px';

        qitem.appendChild(qRadio);
        qitem.appendChild(qLabel);

        qList.appendChild(qitem);
    })
    qForm.appendChild(qList);
    return qForm;
}


//to render question button
function getQuestionButton(startIndex){
    const qBtn = document.createElement("button");
    qBtn.setAttribute("class", "btn btn-primary");
    qBtn.setAttribute("onclick", "checkAnswer(this)");
    qBtn.innerHTML = "Check Answer";
    return qBtn;
}


//Given below method is the example of  ENCAPSULATION concept
//Encapsulation - it is a process of binding data with the function which are acting/working on that data
//for check answer
function checkAnswer(btn){
    const selectedOptions = document.forms['qForm' + startIndex]["qRadio" + startIndex];

    const selectedValue = selectedOptions.value;

    let isConfirmed = confirm("Are you sure");

    if(isConfirmed){
        //creating object so that we can use our array easily
        let quesObj = questionsArr[startIndex];
        btn.disabled = 'true';
        let quesScore = quesObj.calculateScore(selectedValue);

        //to disabled radio
        for(let i = 0; i < selectedOptions.length; i++){
            selectedOptions[i].disabled = 'true';
        }

        //to change color on correct / wrong answer
        const myDiv = document.getElementById(quesObj.id);
        if(quesScore > 0){
            myDiv.style.border = '3px solid green';
            myDiv.style.backgroundColor = 'lightgreen';
        }
        else{
            myDiv.style.border = '3px solid red';
            myDiv.style.backgroundColor = 'lightcoral';
        }

        //rendering the score
        score = score + quesScore;
        document.getElementById('myScore').innerHTML = score;
    }
    
    
}

//for next question
function nextQuestion(btn){
    startIndex++;
    let question = questionsArr[startIndex];

    const mySection = document.getElementById("question-section");

    const qDiv = getQuestionDiv(question, startIndex);
    mySection.appendChild(qDiv);
}    