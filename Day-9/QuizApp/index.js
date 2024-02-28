function Question(id, text, options, answer){
    this.id = id;
    this.text = text;
    this.options = options;
    this.answer = answer;

    let checkAnswer = (choice) =>{
        return this.answer === choice;
    }

    this.calculateScore = (choice) =>{
        if(!checkAnswer(choice)){
            return -5;
        }
        return 20; 
    }
}

const questionsArr = [];
let question1 = new Question('ques1', 'What is the Capital of India ?', ['Delhi', 'Mumbai', 'Chennai', 'Kolkata'], 'Delhi');
let question2 = new Question('ques2', 'What is the fullform of WWW ?', ['World Wide Web', 'Web Wide World', 'World Web Wide', 'World Wibe Website'], 'World Wide Web');
let question3 = new Question('ques3', 'Who is the Indian Criket Captain ?', ['Virat', 'Rohit', 'Hardik', 'Rahul'], 'Virat');
let question4 = new Question('ques4', 'Calculate the expression : 20-5+2*4 = ?', ['17', '23', '20', '15'], '23');

questionsArr.push(question1);
questionsArr.push(question2);
questionsArr.push(question3);
questionsArr.push(question4);


