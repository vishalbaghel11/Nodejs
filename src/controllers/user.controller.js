import { asyncHandler } from "../utils/asynchandler";
const registeruser = asyncHandler(async(req,res)=>{
  res.status.json({
    message:"ok"
  })
})