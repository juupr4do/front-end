import api from './Api.js';
import React from "react";
import axios from 'axios';
import './css.css';


function App() {

  React.useEffect(() => {
    api.get('api').then( res=>{
      console.log(res);
    })
  }, [])

  return (
    <body>
        <div class="titulo">
            <center>
                <br></br>
                <br></br>
                <strong>Ilumeo Desafio</strong>
            </center>
        </div>
        <center>
            <form action="/ponto" method="POST" class="design2 ajuste">
                <center>
                    <p> Digite sua senha</p>
                    <input type="text" name="senha" id ="senha"></input><button class="botao"> Confirmar </button>
                </center>
            </form>
        </center>
    </body>
  );
}

export default App;
