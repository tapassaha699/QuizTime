import React,{useState} from "react";

const QuestionBox = ({question,options,selected}) =>{
  
  const [answer,setAnswer] = useState(options);

  let [classes,setClasses]= useState("answerBtn");

  return (
    <div className="questionBox">

      <div className="question"> {question} </div>
        {answer.map((text,index) => (
          <button key={index} className={classes} onClick={() => {
            let isCorrect = selected(text);

            if(isCorrect)
              setClasses(classes+" greenBtn");
            else
              setClasses(classes+" redBtn");

            setAnswer([text]);
          }
          }>
            {text}
          </button>)
        )}

    </div>
  );

};

export default QuestionBox;
