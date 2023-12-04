function Quiz({question, answers, onSelect}) {
    return ( 
        <div className="quiz-card">
            <div className="quiz-question">
                {question}
            </div>
            <div className="quiz-answers">
                {
                    answers.map((answer, index) => {
                        return (
                            <div onClick={() => onSelect(answer.id)} key={index} className="quiz-answer">({answer.id}). {answer.text}</div>
                        )
                    })
                }
            </div>
        </div>
     );
}

export default Quiz;