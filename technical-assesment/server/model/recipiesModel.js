const connection = require("../database-mysql/index");

const Recepies= (recepie)=> {
    this.Cook_Time= recepie.Cook_Time,
    this.Prep_Time= recepie.Prep_Time ,
    this.recepie_Name = recepie.recepie_Name,
    this.Serves =recepie.Serves ,
    this.categorie =recepie.categorie ,
    this.recepie_Image =recepie.recepie_Image ,
    this.recepie_Description =recepie.recepie_Description ,
    this.recepie_Ingredients =recepie.recepie_Ingredients ,
    this.users_user_Id =recepie.users_user_Id
  };
  Recepies.AddRecepie = (newRecepie, result) => {
    sql.query("INSERT INTO recepies SET ?", newRecepie, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log(" recepie created: ", { id: res.insertId, ...newRecepie });
      result(null, { id: res.insertId, ...newRecepie });
    });
  };
  Recepies.GetRecepie = (id, result) => {
    sql.query(`SELECT * FROM recepies WHERE id = ${id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("found recepies: ", res[0]);
        result(null, res[0]);
        return;
      }
   
      result({ kind: "not_found" }, null);
    });
  };
  Recepies.GetAllRecepies = (title, result) => {
    let query = "SELECT * FROM recepies";
    if (title) {
      query += ` WHERE title LIKE '%${title}%'`;
    }
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("recepies: ", res);
      result(null, res);
    });
  };


  Recepies.EditRecepie = (id, recepies, result) => {
    sql.query("UPDATE recepies SET Cook_Time = ?, Prep_Time = ?, recepie_Name = ? Serves = ? categorie =? recepie_Image =? categorie =? recepie_Description =?  WHERE id = ?",
      [recepies.Cook_Time, recepies.Prep_Time, recepies.recepie_Name , recepies.Serves , recepies.categorie , recepies.recepie_Image , recepies.recepie_Description , id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
        if (res.affectedRows == 0) {
          result({ kind: "not_found" }, null);
          return;
        }
        console.log(" recepies updated: ", { id: id, ...recepies });
        result(null, { id: id, ...recepies });
      }
    );
  };
  Recepies.RemoveRecepie = (id, result) => {
    sql.query("DELETE FROM recepies WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
       
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("deleted recepies with id: ", id);
      result(null, res);
    });
  };
 
  module.exports = Recepies;



