import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import QuestionBox from "./components/questionBox"
import Result from "./components/Result"

import qBank from "./questionBank";
import "./style.css";


class QuizTime extends Component{
  state = {
    score:0,
    responses:0
  };

  computeResult(answer,correctAnswer) {
      let isCorrect = (answer === correctAnswer);

      if(isCorrect)
        this.setState({
          score: this.state.score + 1
        });

      this.setState({responses: this.state.responses + 1});
      
      return isCorrect;

  }

  render(){

    return (
      <div className="container">

        <div className="title"> QuizTime </div>

        {
          this.state.responses<5 && qBank.map(questionObj => (
              <QuestionBox
                question={questionObj.question}
                options={questionObj.answers}
                key={questionObj.qId}
                selected= {answer => this.computeResult(answer,questionObj.correctAnswer)}
              />
          ))
        }

        {this.state.responses === 5 ? <Result score={this.state.score} /> : null}

      </div>
    )

  }
}

ReactDOM.render(<QuizTime/>, document.getElementById("root"));
