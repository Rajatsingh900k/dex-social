import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate";

const videoSchema=new Schema(
    {
        videoFile:{
            type:String,//cloudinary url
            required:[true, "Video file is required"],
        },
        thumbnail:{
            type:String,//cloudinary url
            required:[true, "Thumbnail is required"],
        },
        title:{
            type:String,
            required:[true, "title is required"],
        },
        description:{
            type:String,
            required:[true, "description is required"],
        },
        duration:{
            type:Number,//cloudinary url
            required:true,
        },
        views:{
            type:Number,
            default:0
        },
        isPublic:{
            type:Boolean,
            default:true
        },
        owner:{
            type:Schema.Types.ObjectId,
            ref: "User"
        }
        
    },
    {
        timestamps:true
    }
)
//adding our plugin
videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video",videoSchema);