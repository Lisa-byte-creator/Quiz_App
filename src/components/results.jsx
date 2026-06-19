
//build the UI for the results
function Results ({questionBank, userAnswers, restartQuiz}){

    function getScore(){

        let FinalScore = 0;

        userAnswers.forEach((answer, index)=> {

            if (answer === questionBank[index].answer){

                finalScore++
            }
        })
        returnFinalScore
    }
    //variable that keeps track of the answers that were correct
    const score = getScore()

    return(
    <div>
<h2>Quiz Completed !</h2>
<p>Your Score: {score}/{questionBank.length}</p>
<button className="restart-button" onClick={restartQuiz}>Restart Quiz</button>
    </div>)
}

export default Results;