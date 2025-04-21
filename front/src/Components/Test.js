import React, { useState } from 'react';
import '../css/csstest.css'; 
import Footer from './Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';

function Test() {
  const token = localStorage.getItem('token');
  const decodedToken = token ? jwtDecode(token) : null;
  const userId = decodedToken ? decodedToken.id : null;
  const [answers, setAnswers] = useState({});
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    const getQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/questions/random-questions');
        if (response.status === 200) {
          setQuestions(response.data.map(q => q.questionText));

        } else {
          console.error("Failed to fetch questions:", response.data.message);
        }
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    }
    getQuestions();
  }, []);
  const calculateScore = () => {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
      const answer = answers[i];
      if (answer) {
        score += options.indexOf(answer) ; // Adjusting index to match scoring
      }
    }
    return score;
  }
  const options = [
    "Not at all",
    "Several days",
    "More than half the days",
    "Nearly every day"
  ];

  const handleOptionChange = (questionIndex, option) => {
    setAnswers(prev => ({ ...prev, [questionIndex]: option }));
  };

  const handleSubmit = async () => {
    console.log("User responses:", answers);
    const scr = calculateScore();
    try {
      const res = await axios.post('http://localhost:5000/api/results/analyzeMD',{userId,score:scr});
      if (res.status === 200) {
        console.log("Test submitted successfully:", res.data.label);
        alert(`Your mood is: ${res.data.label}`);
      } else {
        console.error("Failed to submit test:", res.data.message);
      }
      
    } catch (error) {
      console.error("Error submitting test:", error);
      
    }
  };

  const handleReset = () => {
    setAnswers({});
  };

  return (
    <div className="test-page">
        <header className="header">
        <div className="container">
          <div className="logo">
            <h1>Mental Health</h1>
          </div>
          <nav>
            <ul className="nav-links">
              <li><Link to="/acceuil" >Home</Link></li>
              <li><Link to="/test"className="active">Test</Link></li>
              <li><Link to="/resources" >Resources</Link></li>
              <li><Link to="/">Exit</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="test-container">
        <h2>Mental Health Test</h2>
        <form className="test-form">
          {questions.map((question, index) => (
            <div className="question-block" key={index}>
              <h4>{index + 1}. {question}</h4>
              {options.map(option => (
                <label key={option}>
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    checked={answers[index] === option}
                    onChange={() => handleOptionChange(index, option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          ))}
          <div className="button-group">
            <button type="button" onClick={handleSubmit}>Submit Test</button>
            <button type="button" onClick={handleReset}>Cancel</button>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
}

export default Test;
