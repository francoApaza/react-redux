import { combineReducers } from "redux";

const initialState = {
    frutas: [
        // { nome: "Banana" }, //opcional
        // { nome: "Maça" }    //opcional so para teste
    ]
}

function frutasReducer(state = initialState, action) {

    if(action.type === "ADICIONAR") {
    return { frutas: [ ...state.frutas, { ...action.value }]};
    }
    else {
        return state;
    }
}

function tituloReducer(state = { titulo: "...." }, action) {
    if(action.type === "ALTERAR") {
        return { titulo: action.value};
    }
    else {
        return state;
    }
}    


const reducers = combineReducers({ frutasReducer, tituloReducer });

export default reducers;



// base de um novo Reducer
/*
 function nomedoReducer(state = 0, action) {
     if(action.type === "NOMEDAAÇÃO") {
        return state + 1;
     }
     else {
         return state;
     }
    }
*/


