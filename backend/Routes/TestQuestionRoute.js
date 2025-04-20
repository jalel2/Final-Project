// backend/Routes/TestQuestionRoute.js
import express from 'express';
import {createQuestion,getAllQuestions,getRandomQuestionsByType} from '../Controllers/TestQuestionController.js';

const QuestionRouter = express.Router();

QuestionRouter.post('/createQuestion', createQuestion); // Route to create a question
QuestionRouter.get('/questions', getAllQuestions); // Route to get all questions
QuestionRouter.get('/random-questions', getRandomQuestionsByType); // Route to get random questions by type

export default QuestionRouter;