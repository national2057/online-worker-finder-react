const isAdmin = async (req, res, next) => {
   try {
      const role = req.role;
      if(req.role === admin){
         return 
      }
   } catch (error) {
      console.log(error);
   }
}