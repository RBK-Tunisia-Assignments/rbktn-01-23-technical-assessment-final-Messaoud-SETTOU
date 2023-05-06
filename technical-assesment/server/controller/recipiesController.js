const Recepies = require('../model/recipiesModel')


exports.add = (req, res) => {
   if (!req.body) {
    res.status(400).send({
      message: "add recepie"
    });
  }
  const recepie = new recepie({
    Cook_Time: req.body.Cook_Time,
    Prep_Time: req.body.Prep_Time ,
    recepie_Name : req.body.recepie_Name,
    Serves :req.body.Serves ,
    categorie :req.body.categorie ,
    recepie_Image :req.body.recepie_Image ,
    recepie_Description :req.body.recepie_Description ,
    recepie_Ingredients :req.body.recepie_Ingredients ,
    users_user_Id   :req.body.users_user_Id
  });
  Recepies.AddRecepie(recepie, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the recepie."
      });
    else res.send(data);
  });
};
  
exports.getAll= (req, res) => {
  Recepies.GetAllRecepies((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving recepies."
      });
    else res.send(data);
  });
};
  
exports.getOne = (req, res) => {
  Recepies.GetRecepie(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Could not find recepie with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving recepie with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};
  
  exports.update = (req, res) => {
    if (!req.body) {
      res.status(400).send({
        message: "empty!"
      });
    }
    console.log(req.body);
    Recepies.EditRecepie(
      req.params.id,
      new Recepies(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found recepie with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating recepie with id " + req.params.id
            });
          }
        } else res.send(data);
      }
    );
  };

exports.delete = (req, res) => {
    Recepies.RemoveRecepie(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found recepie with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete recepie with id " + req.params.id
          });
        }
      } else res.send({ message: `recepie deleted successfully!` });
    });
  };


