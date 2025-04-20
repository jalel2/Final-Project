import User from "../Models/User.js";
import bcrypt from "bcryptjs";
import generateToken from "../Utils/TokenGenerator.js"



export const signup = async(req, res) => {
    try {
        const { name, lastName, email, password } = req.body;
        console.log(name,lastName,email,password)
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            lastName,
            email,
            password: hashedPassword
        });
        const token = generateToken(user._id);

        res.status(201).json({ message: "User created successfully", user, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};







export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.find({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const token = generateToken(user._id);
        res.status(200).json({ user, token });
        
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        
    }
};

export const logout = async(res) => {
    try {
        res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};