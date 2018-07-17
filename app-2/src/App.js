import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
 constructor () {
   super()

   this.state = {
     countryArtists: [
       "Waylon Jennings",
       "Patsy Cline",
       "Hank Williams",
       "Dolly Parton"
     ]
   }
 }

 render() {
   let countryArtists = this.state.countryArtists.map((element, index) => {
     return (
       <h2 key = {index}>{element} </h2>
     )
   }) 
   return(
     <div className="App">
     { countryArtists }
     </div>
   )
 }
}