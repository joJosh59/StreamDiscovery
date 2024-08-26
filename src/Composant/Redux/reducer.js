import { trendFilm, trendSerie } from "./action";

const stateIniF = {
    result: []
};
const stateIniS = {
    result: []
};

export const ReducerF = (state = stateIniF, action) =>{
    switch (action.type){
        case trendFilm:
            return {
                ...state,
                result: action.results,
            };
        
            default:
            return state;
    };
};

export const ReducerS = (state = stateIniS, action) =>{
    switch (action.type){
        case trendSerie:
            return{
                ...state,
                resultat: action.result
            };
            default:
            return state;
            
    }
}

