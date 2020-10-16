const Words = require('../models/wordModel');
const wordsCrt ={};

wordsCrt.addWord = async (req, res)=> {
    const {name, category, image, linkW, meaning} = req.body;
    let words = new Words({
        name: name,
        category: category,
        image: image,
        linkW: linkW,
        meaning: meaning
    });
    await words.save()
    return res.status(201).send(words);
}
wordsCrt.findByWord = async (req, res) => {
    const words = await findW(req);
    if(words.length!=null) return res.status(200).send(words);
    return res.status(204).json({message: "NO WORD CREATED"});
};

wordsCrt.findByCategory = async (req, res) => {
    const{category} = req.body
    const words =  await Words.find({category: category})
    if(words.length!==0) return res.status(200).send(words);
    return res.status(204).json({message: "NO WORD CREATED"});
};

wordsCrt.findAll = async (req, res) =>{
    const words = await Words.find();
    console.log(words);
    if(words.length!== 0) return res.status(200).json(words);
    return res.status(204).json({message: "NO WORDS CREATED"});
};

wordsCrt.updateW = async (req, res) => {
    const {name, category, image, linkW, meaning} = req.body;
    let words = await findW(req);
    words = words[0];
    if(words==null) return res.status(404).jsonp({message: "NOT FOUND"});

    words.name=name;
    words.category= category;
    words.image= image;
    words.linkW=linkW;
    words.meaning=meaning;

    await words.save();
    return res.status(201).send(words);
};

wordsCrt.deleteWord = async (req, res) => {
    let words= await findW(req);
    words = words[0];

    if(words==null) return res.status(404).jsonp({message: "NOT FOUND"});

    await words.remove();
    return res.status(200).send(words);
};

findW= async (req) =>{
    const{name} = req.body
    const words =  await Words.find({name: name})
    if(words.length!==0) return  words;
    else return null;
}

module.exports= wordsCrt;