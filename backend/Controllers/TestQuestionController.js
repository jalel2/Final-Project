// backend/Controllers/TestQuestionController.js
import TestQuestion from "../Models/TestQuestion.js";

export const createQuestion = async (req, res) => {
    try {
        const { testType, questionText, options } = req.body;

        // Validate input data
        if (!testType || !questionText || !Array.isArray(options) || options.length === 0) {
            return res.status(400).json({ message: "All fields are required and options must be an array" });
        }
        // Check if the test type is valid
        const validTestTypes = ['PHQ-9', 'GAD-7', 'PSS', 'BAI', 'RSES'];
        if (!validTestTypes.includes(testType)) {
            return res.status(400).json({ message: "Invalid test type" });
        }
        // Check if the question already exists
        let existingQuestion;
        try {
            existingQuestion = await TestQuestion.findOne({ testType, questionText });
        } catch (dbError) {
            console.error("Database error while checking existing question:", dbError);
            return res.status(500).json({ message: "Database error" });
        }
        if (existingQuestion) {
            return res.status(400).json({ message: "Question already exists" });
        }
        // Check if options are valid
        for (const option of options) {
            if (!option.option || typeof option.value !== 'number') {
                return res.status(400).json({ message: "Invalid options format" });
            }
        }
        
         const question = new TestQuestion({
            testType,
            questionText,
            options: options.map(opt => ({ option: opt.option, value: opt.value })),
        });
        await question.save();
        res.status(201).json(question);
    } catch (err) {
        console.error("Error creating question:", err);
        res.status(500).json({ message: "Server error" });
    }
};


export const getAllQuestions = async (req, res) => {
    try {
        const questions = await TestQuestion.find();
        res.status(200).json({ questions });
    } catch (error) {
        res.status(500).json({ message: "Error retrieving questions" });
    }
};

export const getRandomQuestionsByType = async (req, res) => {
    try {
        const testTypes = ['PHQ-9', 'GAD-7', 'PSS', 'BAI', 'RSES'];
        const randomQuestions = [];
        for (const type of testTypes) {
            const question = await TestQuestion.aggregate([
                { $match: { testType: type } },
                { $sample: { size: 1 } }
            ]);
            if (question.length > 0) {
                randomQuestions.push(question[0]);
            }
        }
        res.status(200).json(randomQuestions);
    } catch (error) {
        console.error("Error fetching random questions:", error);
        res.status(500).json({ message: "Failed to fetch random questions" });
    }
};