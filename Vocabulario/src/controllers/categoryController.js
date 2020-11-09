const Category = require('../models/categoryModel');
const categoryCrt ={};

categoryCrt.addCategory = async (req, res)=> {
    const {name, level} = req.body;
    let category= new Category({
        name: name,
        level: level
    });
    await category.save()
    return res.status(201).send(category);
}
categoryCrt.findByName = async (req, res) => {
    const name = req.params.name;
    const category =  await Category.find({name: name})
    if(category.length!== 0) return res.status(200).send(category);
    return res.status(204).json({message: "NO CATEGORY CREATED"});
};
categoryCrt.findByLevel = async (req, res) => {
    const level = req.params.level;
    const category =  await Category.find({level: level})
    if(category.length!== 0) return res.status(200).send(category);
    return res.status(204).json({message: "NO CATEGORY CREATED"});
};
categoryCrt.findAll = async (req, res) =>{
    const category = await Category.find();
    if(category.length!== 0) return res.status(200).json(category);
    return res.status(204).json({message: "NO CATEGORY CREATED"});
};

categoryCrt.updateC = async (req, res) => {
    const {name, level} = req.body;
    let category = await findC(req);
    category= category[0];
    if(category==null) return res.status(404).jsonp({message: "NOT FOUND"});

    category.name=name;
    category.level=level;

    await category.save();
    return res.status(201).send(category);
};

categoryCrt.deleteCategory = async (req, res) => {
    let category = await findC(req);
    category = category[0];

    if(category==null) return res.status(404).jsonp({message: "NOT FOUND"});

    await category.remove();
    return res.status(200).send(category);
};

findC= async (req) =>{
    const{name} = req.body
    const category =  await Category.find({name: name})
    if(category.length!==0) return  category;
    else return null;
}

module.exports= categoryCrt;