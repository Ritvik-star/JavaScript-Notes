const User = require("../Model/user");


//to get all users
async function handleGetAllUsers(req, res){
    const allDBUsers = await User.find({});
    return res.json(allDBUsers);
};


//to create new user
async function handlerPostNewUser(req, res){
    const body = req.body;

    if(!body || !body.firstName || !body.lastName || !body.email || !body.gender){
        res.status(400).end("bad request found: 400");
    }

    const result = await User.create({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        gender: body.gender
    })

    if(result){
       return res.status(201).json({msg: "new user created successfully."});
    }

}


async function handleGetByIdUser(req, res){
    const user = await User.findById(req.params.id);

    if(user){
        res.json(user);
    }else{
        res.status(404).end({msg: "user not found : 404"});
    }
}


async function handlePatchUser(req, res){
    const body = req.body;

    if(!body || !body.firstName || !body.lastName || !body.gender || !body.email){
        res.status(404).end({msg: "user not found : 404"});
    }

    await User.findByIdAndUpdate(req.params.id, body);

    res.json({msg: "user is updated successfully"});
}

async function handlerDeleteUser(req, res){
    await User.findByIdAndDelete(req.params.id);
    res.json({msg: "user deleted successfully"});
}


module.exports = {
    handleGetAllUsers,
    handlerPostNewUser,
    handleGetByIdUser,
    handlePatchUser,
    handlerDeleteUser,
}