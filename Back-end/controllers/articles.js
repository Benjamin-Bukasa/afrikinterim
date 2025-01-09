
//recupération de tous articles du blog
const getArticles = (req,res)=>{
    res.status(200).json({message:`Liste de tous les articles du blog`})
}


//recupération d'un article unique du blog
const getArticle = (req,res)=>{
    res.status(200).json({message:`Article du blog n° ${req.params.id}`})
}

//ajout d'un article du blog
const postArticle = (req,res)=>{
    res.status(200).json({message:`Liste de tous les articles du blog`})
}

//modification d'un article unique du blog
const putArticle = (req,res)=>{
    res.status(200).json({message:`Article du blog n° ${req.params.id} modifié`})
}

//modification du contenu d'un article unique du blog
const patchArticle = (req,res)=>{
    res.status(200).json({message:`Article du blog n° ${req.params.id} modifié partiellement`})
}

//suppression d'un article unique du blog
const deleteArticle = (req,res)=>{
    res.status(200).json({message:`Article du blog n° ${req.params.id} supprimé`})
}

module.exports = {getArticle,getArticles, postArticle,putArticle,patchArticle,deleteArticle}