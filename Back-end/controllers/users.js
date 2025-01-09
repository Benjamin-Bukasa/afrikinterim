
//recupération de tous les utilisateurs
const getUsers = (req,res)=>{
    res.status(200).json({message:`Liste de tous utilisateurs`})
}

//recupération d'un utilisateur 
const getUser = (req,res)=>{
    res.status(200).json({message:`Liste de tous utilisateurs n° ${req.params.id}`})
}

//création d'un nouvelle utilisateur
const postUsers = (req,res)=>{
    res.status(200).json({message:`Création d'un nouvel utilisateur reussi !`})
}

//Modification d'un utilisateur 
const putUser = (req,res)=>{
    res.status(200).json({message:`Modification de l'utilisateur n° ${req.params.id}`})
}

//Modification d'une info de l'utilisateur 
const patchUser = (req,res)=>{
    res.status(200).json({message:`Modification de l'info de l'utilisateur n° ${req.params.id}`})
}

//Modification d'un utilisateur 
const deleteUser = (req,res)=>{
    res.status(200).json({message:`Suppression de l'utilisateur n° ${req.params.id}`})
}

module.exports = {
    getUsers, getUser,postUsers,putUser,patchUser,deleteUser,
}