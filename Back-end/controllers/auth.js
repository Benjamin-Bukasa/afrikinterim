const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const bcrypt = require("bcrypt")


const registerUser = async (req, res)=>{
    const {email,phone,password, firstName, lastName} = req.body
    if(!firstName || !lastName || !password || !phone || !email){
        res.status(400)
        throw new Error("Veuilllez remplir tous les champs");
    }
    const userAvailable = await prisma.user.findUnique({where:{email}});
    if(userAvailable){
        res.status(400)
        throw new Error("Cette adresse email a déjà un compte");
    }

    const hPassword = await bcrypt.hash(password, 10)
    console.log("mot de passe crypté:", hPassword);
    const user = await prisma.user.create({
        data:{
            firstName,
            lastName,
            email,
            phone,
            password:hPassword
        }
    })
    
    console.log(`Utilisateur créé ${user}`);

    if(user){
        res.status(200).json({_id:user.id, email:user.email})
    }else{
        res.status(400)
        throw new Error("Utilisateur non valide");
        
    }
}



const loginUser = async (req, res)=>{
  res.status(200).json({message:`Utilisateur connecté`})
}




const currentUser = async (req, res)=>{
  res.status(200).json({message:`Utilisateur en cours`})
}


module.exports = {
    registerUser, loginUser, currentUser
}