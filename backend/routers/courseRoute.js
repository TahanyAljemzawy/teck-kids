const express = require('express');
const router = express.Router();
//import the htmlmodel to use the schema to get the lisson 
const htmlCourse = require('../models/html');

/**************************************************/

router.get('/html/:_id' , function (req , res) {
    console.log(req.params._id)
    var course = htmlCourse.findOne(req.params._id)
    .then(lessonFound=>{
        console.log(course)
        if(!lessonFound){return res.status(404).json("Can't find the lesson")}
        return res.status(200).json(lessonFound)
    })
    .catch(err =>  res.status(500).json("not working"))      
    
} );
/*
router.post('/h',(req,res)=>{

try{

}catch(error){return res.status(500).json({err : error.message})}
})*/

module.exports = router;
