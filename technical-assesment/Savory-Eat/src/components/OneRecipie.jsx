import React from "react";
import "../App.css" ;
import "../index.scss";
import React ,{ Component } from 'react';
import { useEffect } from "react";
import axios from 'axios' ;



class OneRecepie extends Component {
   recepies = () => {
    const [recepies, setrecepies] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:4000/recepies/:id')
      .then(res => {
        setrecepies(res.data);
      })
      .catch(err => console.log(err));
  }, []);
 
 

  render() { 
    console.log(recepies);
    return (
      <div>
      {recepies.map(recepie=><li>   {key = recepie.name} {recepie.recepie_Name}{recepie.Cook_Time} 
      {recepie.Prep_Time} {recepie.Serves} {recepie.categorie} {recepie.recepie_Description} {recepie.recepie_Image}  
      {recepie.recepie_Ingredients}</li> )}

   </div>


    )
  }
}}
 
export default OneRecepie;
