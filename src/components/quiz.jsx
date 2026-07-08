// creating a component called quiz

import { useState } from "react";
import Results from "./results";

function Quiz (){

    //creating list of qstns and answers as an array of objects

    const questionBank = [

    {
         question: "Which language is primarily used for styling web pages?",
    options: [
      "Java",
      "Python",
      "CSS",
      "C#"
    ],
    answer: "CSS"
    },

    {question: "Which language is used to make web pages interactive?",
    options: [
      "HTML",
      "CSS",
      "JavaScript",
      "SQL"
    ],
    answer: "JavaScript"
},

    {
         question: "Which company developed React?",
    options: [
      "Google",
      "Microsoft",
      "Facebook",
      "Apple"
    ],
    answer: "Facebook"
    },

    {
        question: "Which keyword is used to declare a constant in JavaScript?",
    options: [
      "let",
      "var",
      "const",
      "static"
    ],
    answer: "const"
    },


        ]


        {/**using hooks (STATE that keeps track of all the answers as a list) */}

        const initialAnswers = [null, null, null, null]

        const [userAnswers, setUserAnswers] = useState(initialAnswers)

        console.log(userAnswers)
        
        {/**Creating a State */}
        const [currentQuestion, setCurrentQuestion] = useState(0)

        //creating a state to see if we have reached to the end of the quiz or not

        const [isQuizFinished, setIsQuizFinished] = useState(false)

        //variable that keeps track the current selected answer
        const selectedAnswer = userAnswers[currentQuestion];


        function handleSelectOption(option){

            const newUserAnswers = [...userAnswers];

            newUserAnswers [currentQuestion ] = option;

            setUserAnswers(newUserAnswers);

        }

        //creating a function that allows the user to go to the next question

        function goToNext (){

            if(currentQuestion === questionBank.length -1){

                setIsQuizFinished(true)

            }else{

        setCurrentQuestion(currentQuestion + 1)
            } 
        }

        //creating a function that allows the user to got to the previous question

        function gotToPrev(){

            if (currentQuestion > 0){

                      setCurrentQuestion(currentQuestion - 1)
            } }
        //check if we are at the end of the quiz

    function restartQuiz(){

        setUserAnswers(initialAnswers)

        setCurrentQuestion(0)

        setIsQuizFinished(false)

    }

        if (isQuizFinished){
            return <Results userAnswers={userAnswers}
             questionBank={questionBank}
              restartQuiz={restartQuiz}/>
        }
        //the UI display
    return  (
  
    
    <div>
    <h2>Question {currentQuestion + 1}</h2>

    <p className="question">
        {questionBank[currentQuestion].question}
    </p>

    {questionBank[currentQuestion].options.map((option) => (
        <button
            key={option}
            className={
                "option" +
                (selectedAnswer === option ? " selected" : "")
            }
            onClick={() => handleSelectOption(option)}
        >
            {option}
        </button>
    ))}

    <div className="nav-buttons">
        <button
            onClick={gotToPrev}
            disabled={currentQuestion === 0}
        >
            Previous
        </button>

        <button
            onClick={goToNext}
            disabled={!selectedAnswer}
        >
            {currentQuestion === questionBank.length - 1
                ? "Finish Quiz"
                : "Next"}
        </button>
    </div>
</div>)

// accessing the 'Quiz' function from App.jsx
    //export 
            }
    export default Quiz;

            