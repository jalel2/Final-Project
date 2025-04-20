import React, { useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [questions, setQuestions] = useState([]);
  const [results, setResults] = useState([]);
  const [newQuestion, setNewQuestion] = useState({
    questionText: '',
    questionType: '',
    options: []
  });

  const token = localStorage.getItem('token'); // JWT from login

  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  const fetchQuestions = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/questions', axiosConfig);
      setQuestions(res.data.questions);
      console.log(res.data.questions);
    } catch (error) {
      console.error('Error fetching questions', error);
    }
  };

  const createQuestion = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/questions', newQuestion, axiosConfig);
      alert('Question created!');
      console.log(res.data);
    } catch (error) {
      console.error('Error creating question', error);
    }
  };

  const fetchResults = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/admin/test-results', axiosConfig);
      setResults(res.data.testResults);
      console.log(res.data.testResults);
    } catch (error) {
      console.error('Error fetching test results', error);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>👨‍💼 Admin Dashboard</h1>

      <div style={{ marginTop: '2rem' }}>
        <button onClick={fetchQuestions}>📋 Get All Questions</button>
        <button onClick={fetchResults} style={{ marginLeft: '10px' }}>📊 Get Test Results</button>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3>Create New Question</h3>
        <input
          type="text"
          placeholder="Question Text"
          value={newQuestion.questionText}
          onChange={(e) => setNewQuestion({ ...newQuestion, questionText: e.target.value })}
        />
        <input
          type="text"
          placeholder="Question Type"
          value={newQuestion.questionType}
          onChange={(e) => setNewQuestion({ ...newQuestion, questionType: e.target.value })}
        />
        <textarea
          placeholder="Options JSON"
          value={JSON.stringify(newQuestion.options)}
          onChange={(e) => setNewQuestion({ ...newQuestion, options: JSON.parse(e.target.value || '[]') })}
        />
        <br />
        <button onClick={createQuestion}>➕ Create Question</button>
      </div>
    </div>
  );
};

export default AdminDashboard;
