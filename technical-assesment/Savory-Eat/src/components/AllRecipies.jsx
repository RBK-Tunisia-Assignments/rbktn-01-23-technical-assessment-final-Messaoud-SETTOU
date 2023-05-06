
import "../index.scss";
import recepies from "../data/recepies" ;
import { useEffect } from 'react';
import { useState } from 'react';
import React, { Component } from 'react';
import axios from 'axios'


    class AllRecepies extends Component {


      recepies = () => {
        const [recepies, setrecepies] = useState([]);
    
      useEffect(() => {
        axios.get('http://localhost:4000/recepies')
          .then(res => {
            setrecepies(res.data);
          })
          .catch(err => console.log(err));
      }, []);
    
      render() { 
        console.log(recepies);
        return (
          <div>
             {recepies.map(recepie=>  <li> {key = recepie.name} {recepie.recepie_Name}{recepie.Cook_Time} {recepie.Prep_Time} {recepie.Serves} {recepie.categorie} {recepie.recepie_Description} {recepie.recepie_Image}  {recepie.recepie_Ingredients}</li> )}

          </div>
        )
      }
    }

  }
     
    export default AllRecepies;
  
  
  
  

