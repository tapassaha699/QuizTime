import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import "./style.css";
import qBank from "./questionBank";
import QuestionBox from "./components/questionBox"

class QuizTime extends Component{
  render(){
    return (
      <div className="container">
        <div className="title"> QuizTime </div>
        <div>
            {qBank.map(questionObj => (
              <QuestionBox
                question={questionObj.question}
                options={questionObj.answers}
                key={questionObj.qId}
              />
          ))}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<QuizTime/>, document.getElementById("root"));
