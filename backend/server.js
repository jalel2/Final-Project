import dotenv from 'dotenv';
import express from 'express';
import authRoute from './Routes/AuthRout.js';
import { connection } from './DB/Connection.js';
import ResultRouter from './Routes/TestResultRoute.js';
import QuestionRouter from './Routes/TestQuestionRoute.js';
import cors from 'cors';


// Load environment variables
dotenv.config();

const app = express();
app.use(cors({
    origin: 'http://localhost:3000',
    credentials:true
}));

app.use(express.json())

// Routes
app.use('/api/auth', authRoute);
app.use('/api/questions', QuestionRouter);
app.use('/api/results', ResultRouter);



// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    connection(); // Connect to the database
});