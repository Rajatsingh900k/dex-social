//wrapper function for async-await
const asyncHandler=(requestHandler)=>{
    return (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}

export {asyncHandler}
// or

// const asyncHandler=(func)=>{
//    async (req,res,next)=>{
//     try{
//         await func(req,res,next)
//     }catch(e){
//         e.status(e.code || 500).json({
//             success: false,
//             message: e.message
//         })
//     }
//    }
// }