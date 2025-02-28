const { User } = require("../models/user.model");

const isAdmin = async (req, res, next) => {
   try {
      const role = req.body.role;
      if(!role){
         return res.status(400).json({
            message: "Your role is missing.",
            success: false,
         });
      };
      let user = await User.find({role: "admin"});
      if(user.role === "admin"){
         res.render("/admin/")
      }
      next();
   } catch (error) {
      console.log(error);
   }
}

module.exports = {isAdmin};