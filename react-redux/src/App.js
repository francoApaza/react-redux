import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import Menu from './components/menu';

function App() {
  const [inputFrutas, setInputFrutas] = React.useState("");
  const [inputTitulo, setInputTitulo] = React.useState("");


  // Redux
  const frutas = useSelector((state) => state.frutasReducer.frutas);
  // console.log(frutas)
  const statetitulo = useSelector((state) => state.tituloReducer.titulo);
  // console.log(statetitulo)


  const dispatch = useDispatch();

  function adicionarFruta(event) {
    event.preventDefault();

    const objFruta = {
      nome: inputFrutas
    }

    dispatch({type: "ADICIONAR" , value: objFruta});

    
  }

  function alterarTitulo(event) {
    setInputTitulo(event.target.value);
    dispatch({type: "ALTERAR", value:event.target.value})
  }


  return (
    <div className="container p-3 my-3">

      <div>
       <Menu />
      </div>

    <div className="container-fluid">
      <form className="card form mb-3 mt-5">
        <label className="form-label h5">Nome da lista: </label>
        <input className="form-control border border-2 border-warning mt-3" placeholder="Ex. Compra da semana, Objetivos , Marca de carros ..." value={inputTitulo} onChange={alterarTitulo} 
        />
      </form>


      <form onSubmit={adicionarFruta} className="card form mb-3">

        <label className="form-label h5">Crie a sua lista temporaria : </label>
        <input className="form-control border border-info mb-3 mt-3" placeholder="Digite aqui..." value={inputFrutas} onChange={(event) => setInputFrutas(event.target.value)}
        />
        <button className="btn btn-outline-success ">
          Adicionar
        </button>
      </form>

      <div className="form-control" rows="3">
      <h1>{statetitulo}</h1>
      <h5 className="mt-3">sua lista:</h5>
      { 
        frutas.map((fruta, index) => {
          return(
              <li key={index}> {fruta.nome} </li>
          )
        })
      }


      </div>
      
    
     
    </div>
    </div>
  );
}

export default App;
