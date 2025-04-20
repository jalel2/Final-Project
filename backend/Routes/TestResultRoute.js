import express from 'express';
import { analyzeScores } from '../Controllers/TestResultController.js';
import { getAllTestResults } from '../Controllers/TestResultController.js';

const ResultRouter = express.Router();

// Route to analyze scores and return category and label
ResultRouter.post('/analyze-scores', analyzeScores);
ResultRouter.get('/all',getAllTestResults);

export default ResultRouter;