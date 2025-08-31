import fs from 'fs'
import imagekit from '../configs/imageKit.js';
import Blog from "../models/Blog.js"

export const addBlog=async(req,res)=>{
try {
    const {title,subTitle,description,category,isPublished} =JSON.parse(req.body.blog);

    const imageFile=req.file;

    if(!title|| !subTitle|| !category ||!imageFile ) {
        res.json({sucess:false,message:"Missing required fields"})
    }
const fileBuffer=fs.readFileSync(imageFile.path)

//Upload image to imagekit
const response=await imagekit.upload({
    file:fileBuffer,
    fileName:imageFile.originalname,
    folder:"/blogs"
})

//Optimization through imagekit URL transformation
       const optimizedImageUrl = imagekit.url({
        path: response.filePath,
        transformation : [
            {quality : 'auto'}, // Auto Compression
            {format : 'webp'}, // Convert to modern format
            {width : '1280'} // width resizing
        ]
       });

       const image=optimizedImageUrl;
       //short form for creatinf new object and saving it 
       await Blog.create({title,subTitle,description,category,image,isPublished})
       res.json({sucess:true,message:"Blog added successfully"})

} catch(error) {
    res.json({success:false,message:"Blog not created",error:error.message})

}
}