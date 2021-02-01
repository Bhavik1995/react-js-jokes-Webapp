import React from 'react';
import axios from 'axios';

import './index.css'

const App = (props) =>{

    // state = {joke: ''};

    // const url="https://icanhazdadjoke.com",setHeaders;


    const getData = () =>{ 

    const jokes = document.querySelector('#jokes');
    const jokesBtn = document.querySelector('#jokeBtn');
    const setHeader = {
        headers: {
            Accept:"application/json"
        }
    }
       fetch('https://icanhazdadjoke.com',setHeader)
       .then((res)=>res.json()).then((data)=>{
             jokes.innerHTML = data.joke;
            //  console.log(data.joke);
            //  this.setState({data});
           }).catch((err)=>{
           console.log(err);
       });  
    }

    return(
        <>
           <div className="app">
                <div className="card">
                    <h4>Click the button to get jokes 😄</h4>
                    <h1 className="heading" id="jokes">{props.jokes}</h1>
                    <button className="button" onClick={getData}>
                        <span>Click Here</span>
                    </button>
                </div>
           </div>
        </>
    )
}

export default App;