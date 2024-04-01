import User from "../models/user.model.js";

export const signup = async (req, res) => {
    try {
        const {fullName, username, password, confirmpassword, gender} = req.body;

        if(password !== confirmpassword) {
            return res.status(400).json({error: "Password do not match"})
        }

        const user = await User.findOne({username});

        if(user) {
            return res.status(400).json({error: "Username already exist"});
        }

        // HASH PASSWORD HERE
        // https://avatar.iran.liara.run/public/boy?username=Scott

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;

        const newUser = new User ({

            fullName, 
            username, 
            password,
            confirmpassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        }) 

        await newUser.save();
        //console.log(req.body);
        res.status(200).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            profilePic: newUser.profilePic

        })
        
    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({error: "Internal Server Error "})
        
    }
}

export const login = (req, res) => {
   // console.log("login");
}

export const logout = (req, res) => {
   // console.log("logout");
}