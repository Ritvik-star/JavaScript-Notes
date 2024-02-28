//this file will be uses for routes for user
//but since this is not the index file where we can directly use
//app.GET() or app.post() or so on...for routes

//this is seperate router file so we have to have router from express
//.e.g...

const express = require("express");
const { handleGetAllUsers, handlerPostNewUser, handleGetByIdUser, handlePatchUser, handlerDeleteUser } = require("../Controllers/user");

const router = express.Router();

//this router reference variable will provide us all http methods for routing

// router.get("/", async (req, res) => {
//   const allDBUsers = await User.find({});
//   res.json(allDBUsers); // -> if we want to share db data as json in response
// });
router.get("/", handleGetAllUsers);
              //this function is coming from controller

// router.post("/", async (req, res) => {
//   const body = req.body;

//   if (
//     !body ||
//     !body.firstName ||
//     !body.lastName ||
//     !body.email ||
//     !body.gender
//   ) {
//     res.status(400).end("Bad Request Found : 400");
//   }

//   const result = await User.create({
//     firstName: body.firstName,
//     lastName: body.lastName,
//     email: body.email,
//     gender: body.gender,
//   });


//   return res.status(201).json({ msg: "created successfully." });
// });
router.post("/", handlerPostNewUser)

// router.get("/:id", async (req, res) => {
//   const user = await User.findById(req.params.id); //findById() will find user based on params id in db

//   if (user) {
//     res.json(user);
//   } else {
//     res.status(404).json({ msg: "user not found : 404" });
//   }
// });
router.get("/:id", handleGetByIdUser);

// router.patch("/:id", async (req, res) => {
//   const body = req.body;

//   if (
//     !body ||
//     !body.firstName ||
//     !body.lastName ||
//     !body.email ||
//     !body.gender
//   ) {
//     res.status(400).end("Bad Request Found : 400");
//   }

//   const result = {
//     firstName: body.firstName,
//     lastName: body.lastName,
//     email: body.email,
//     gender: body.gender,
//   };

//   await User.findByIdAndUpdate(req.params.id, result);

//   res.json({ msg: "user updated successfully" });
// });
router.patch("/:id", handlePatchUser);


// router.delete("/:id", async (req, res) => {
//   await User.findByIdAndDelete(req.params.id);

//   res.json({ msg: "user deleted successfully" });
// });
router.delete("/:id", handlerDeleteUser);


module.exports = router;
