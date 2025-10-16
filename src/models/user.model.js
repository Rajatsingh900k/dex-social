import mongoose, {Schema} from 'mongoose';
import  jwt  from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const userSchema = new Schema(
    {
        username:{
            type:String,
            required:[true,"Username is required"],
            unique:true,
            lowercase:true,
            trim:true,
            index:true
        },
        email:{
            type:String,
            required:[true,"E-mail address is required"],
            unique:true,
            lowercase:true,
            trim:true,
        },
        fullname:{
            type:String,
            required:[true,"Fullname is required"],
            trim:true,
            index:true
        },
        avatar:{
            type:String, //use url cludinary for avatar img
            required:[true, "Avatar is required"]
        },
        coverImage:{
            type:String
        },
        watchHistory:{
            type:Schema.Types.ObjectId,
            ref:"Video"
        },
        password:{
            type:String,
            required:[true,'Password is required'],
        },
        refreshToken:{
            type:String,
        }
    },
    {
        timestamps:true
    }
);

//encryprion for password.
userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        return next();
    }
    this.password=await bcrypt.hash(this.password, 10)
    next()
})
// checking password
userSchema.methods.isPasswordCorrect=async function(password) {
    return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateAccessToken= function(){
    return jwt.sign(
        {
            //payload
            _id:this._id,
            email:this.email,
            username:this.username,
            fullname:this.fullname
        },
        //accessToken
        process.env.ACCESS_TOKEN_SECRET,
        //expiry
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken= function(){
    jwt.sign(
        {
            //payload
            _id:this._id,
        },
        //refreshToken
        process.env.REFRESH_TOKEN_SECRET,
        //expiry
        {
            expiresIn:process.env.EFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", userSchema);