import React, {Component}from 'react';
import style from './feebback.module.css';

export default class FeedbackApp extends Component{
   

    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }
    
    AumentarContadorGood = () => {
        this.setState({ good:this.state.good + 1})
        console.log("Good :" ,this.state.good)
    } 
    AumentarContadorNeutral = () => {
        this.setState({ neutral:this.state.neutral + 1})
        console.log("Neutro :" ,this.state.neutral)
    }
    AumentarContadorBad = () => {
        this.setState({ bad:this.state.bad + 1})
        console.log("Bad :" ,this.state.bad)
    }
    countTotalFeedback = () =>{
    const  { good, neutral, bad } = this.state
    return good + neutral+ bad
    }
    countPositiveFeedbackPercentage = () =>{
        return this.countTotalFeedback() > 0 ? Math.round((this.state.good/this.countTotalFeedback ())*100) : 0
    }
     Notification = (props) =>{
        return <h2>{props.mensaje}</h2>
    }
    render(){
        const { good, neutral, bad } = this.state
        return (
            <>
            
          <div className={style.container}>
              <h2>Please leave Feedback</h2>
              <br></br>
             <div className={style.containerbutton}>
                 <button className={style.button} onClick={this.AumentarContadorGood}>Good</button>
                 <button className={style.button}  onClick={this.AumentarContadorNeutral}>Neutral</button>
                 <button className={style.button} onClick={this.AumentarContadorBad}>Bad</button>
             </div>
              <br></br>
              <h2>Statictis</h2>
              {this.countTotalFeedback () > 0 ? 
              <div>
                  
                  <ul>
                      <li>Good: {good} </li>
                      <li>Neutral: {neutral}</li>
                      <li>Bad: {bad}</li>
                      <li>Positive Feedback: {this.countPositiveFeedbackPercentage()} % </li>
                  </ul>
              </div>    
            :<Notification mensaje="There is no feedback"/> }
          </div>
        </>
            
        );
    }
}

function Notification(props) {
    return(
        <h2> {props.mensaje}</h2>
    )
}