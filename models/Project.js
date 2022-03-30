
const { ProjectPImageSchema } =require('./ProjectPImage');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
Underscoreid:String , 


pImage:  
ProjectPImageSchema
 , 


pTitle:String , 


pEnd:String , 


pWebsite:String , 


pStart:String , 


pDuration:String , 


pGA:String , 




 pWorkpackage: [ 
  {
    type: Schema.Types.ObjectId,
    ref:'workpackage'
  }

]
, 



 pDeliverable: [ 
  {
    type: Schema.Types.ObjectId,
    ref:'deliverable'
  }

]
, 

pAbstract:String , 


pDescription:String 



})

module.exports = {
  Project : mongoose.model('project', projectSchema),
}

