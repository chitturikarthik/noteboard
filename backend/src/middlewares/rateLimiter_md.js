import ratelimit from "../config/upstash.js"

const rateLimiter_md = async (req,res,next) => {
    try {
        const {success} = await ratelimit.limit("my-limit-key");
        if(!success){
            return res.status(429).json({message: "Too many requests!"});
        };
        console.log(`Req method is ${req.method} & Req url is ${req.url}`)
        next()
    } catch (error) {
        console.log("Ratelimit error: ", error.message);
        next(error);
    }   
}

export default rateLimiter_md;