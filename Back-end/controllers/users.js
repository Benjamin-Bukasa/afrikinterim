const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


//recupération de tous les utilisateurs
const getUsers = async (req,res)=>{

    try {
        const users = await prisma.user.findMany()
        res.status(200).json(users)
    } catch (error) {
        res.status(200).json({message:`Erreur lors de la récupération des données dans le serveur`})
    }
}

//recupération d'un utilisateur 
const getUser = async (req,res)=>{
   
    try {
        const user = await prisma.user.findUnique({
            where:{
                id: req.pramas.id
            }
        })

        if(!user){
            res.status(404).json({message:`Utilisateur non trouvé`})
        }
        res.status(200).json(user)

    } catch (error) {
        
        res.status(500).json({message:`Erreur lors de la connexion au serveur`})
    }
}

//création d'un nouvelle utilisateur
const postUsers = async(req,res)=>{
    const { firstName, lastName, email, password, phone } = req.body;
  try {
    if(!firstName || !lastName || !email || !password || !phone){
        res.status(400).json({message:` Veuillez remplir tous les champs`})
    }

    const newUser = await prisma.user.create({
        data: {
          firstName,
          lastName,
          email,
          password,
          phone,
        },
      });
  
      res
        .status(201)
        .json({ message: "Utilisateur ajouté avec succès", user: newUser });


  } catch (error) {
    res.status(400).json({
      message: "Erreur lors de l'ajout de l'utilisateur",
      error: error.message,
    });
  }
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