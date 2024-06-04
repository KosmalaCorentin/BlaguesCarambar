const Blague = require("../models/blague");


const getRandomBlague = (array) => {

    const random = Math.floor(Math.random()*array.length);
    
    return array[random]

}


const controllerBlague = {
    random:async(req, res) => {
        const data = await Blague.findAll();
        const randomBlague = getRandomBlague(data);
        res.status(200).json({ blague : randomBlague });

    },
    findAll :  async (req, res) =>{
        const data = await Blague.findAll();
        res.status(200).json({blagues : data});

    },
    findByID :  async (req, res) =>{
        const data = await Blague.findByID();
        res.status(200).json({blagues : data});

    }

}
module.exports=controllerStudent