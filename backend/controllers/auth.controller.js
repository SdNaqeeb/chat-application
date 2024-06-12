import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/generateToken.js";

export const login = async (req, res) => {
  try {
    const { username, pass } = req.body;
    const user = await User.findOne({ username });
    const isPassCorrect = await bcrypt.compare(pass, user?.pass || "");
    if (!user || !isPassCorrect) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    generateToken(user._id, res);
    res.status(200).json({ 
        _id:user._id,
        fullName:user.fullName,
        username:user.username,
        profilePic:user.profilePic,

    });
  } catch (error) {
    console.log("error in login", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt","",{maxAge:0})
    res.status(200).json({message:"logged out successfully"})
  } catch (error) {
    
  }
};

export const signup = async (req, res) => {
  try {
    const { fullName, username, pass, confirmpass, gender } = req.body;

    if (pass !== confirmpass) {
      return res.status(400).json({ error: "password do not match" });
    }

    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ error: "username already exist" });
    }

    //HASH PASS
    const salt = await bcrypt.genSalt(10);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      pass: await bcrypt.hash(pass, salt),
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });
    if (newUser) {
      generateToken(newUser._id, res);
      await newUser.save();

      res
        .status(201)
        .json({
          _id: newUser._id,
          fullName: newUser.fullName,
          username: newUser.username,
          gender: newUser.gender,
          profilePic: newUser.profilePic,
        });
    } else {
      res.status(500).json({ error: "invalid user data" });
    }
  } catch (err) {
    console.log("error in signup", err.message);
    res.status(500).json({ err: "Internal server error" });
  }
};
