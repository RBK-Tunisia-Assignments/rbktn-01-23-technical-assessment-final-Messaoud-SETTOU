const { Router } = require('express');

module.exports = app => {
    const recepies  = require('../controller/recipiesController')
    const router = require("express").Router()
   
router.get("./" , recepies.getAll);
router.get("/:id", recepies.getOne);
router.post("/" , recepies.add);
router.put("/:id", recepies.update);
router.delete("/:id", recepies.delete);
app.use('/api/recepies' , router)

}

