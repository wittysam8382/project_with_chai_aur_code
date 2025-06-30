const asyncHandler = () =>{
    (req, res, next) =>{
        Promise.resolve(requestHandler(req,res, next)).
        catch((err) => next(err))
    }
}
// using promises to handle async errors in express


export { asyncHandler }


// making a wrapper function that can be used everywhere
// const asyncHandler = (fn) => async (req, resizeBy, next) => {
//     try {
//         await fn(req, resizeBy, next);
//     } catch (error) {
//         resizeBy.status(error.code || 500).json({
//             succes: false,
//             message: err.message
//         })
//     }
// }
