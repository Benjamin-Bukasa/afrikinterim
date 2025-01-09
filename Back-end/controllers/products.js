

//recuperer tous les produits
const getProducts = (req, res)=>{
    res.status(200).json({message:`Liste de tous les produits`})
}

//recuperer un produit unique
const getProduct = (req, res)=>{
    res.status(200).json({message:`Produit n° ${req.params.id}`})
}

//Ajouter un nouveau produit
const postProduct = (req, res)=>{
    res.status(200).json({message:`Ajout d'un nouveau produit réussi !`})
}

//Modification d'un produit unique
const putProduct = (req, res)=>{
    res.status(200).json({message:`Modification du Produit n° ${req.params.id}`})
}

//Modification d'une info d'un produit unique
const patchProduct = (req, res)=>{
    res.status(200).json({message:`Modification de l'info du Produit n° ${req.params.id}`})
}

//Suppression d'un produit unique
const deleteProduct = (req, res)=>{
    res.status(200).json({message:`Supression du Produit n° ${req.params.id}`})
}

module.exports = {
    getProducts,getProduct,postProduct, putProduct, patchProduct, deleteProduct
}