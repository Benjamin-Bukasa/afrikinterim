

//recupération de toutes les offres 
const getOffers = (req,res)=>{
    res.status(200).json({message:`Recupération de toutes les offres`})
}

//recupération d'une offre unique
const getOffer = (req,res)=>{
    res.status(200).json({message:`Recupération de l'offre n° ${req.params.id}`})
}

//Ajout d'une nouvelle offre
const postOffer = (req,res)=>{
    res.status(200).json({message:`Nouvelle offre d'emploi ajoutée`})
}

//Modification d'une offre unique
const putOffer = (req,res)=>{
    res.status(200).json({message:`Modification de l'offre n° ${req.params.id}`})
}

//Modification d'info d'une offre unique
const patchOffer = (req,res)=>{
    res.status(200).json({message:`Modification des informations de l'offre n° ${req.params.id}`})
}

//Suppression d'une offre unique
const deleteOffer = (req,res)=>{
    res.status(200).json({message:`Suppression de l'offre n° ${req.params.id}`})
}

module.exports = {getOffers, getOffer, postOffer, putOffer, patchOffer, deleteOffer}