import axios from "axios";

export const trendFilm = "trendFilm";
export const trendSerie = "trendSerie"

const api_key = import.meta.env.VITE_API_KEY;



export const tendanceFilm = () => {
    return async (dispatch) =>{
        try {
        const resTF = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}`);
        const { results } = resTF.data;
        const limit = results.slice(0, 6);
        
        dispatch({
            type: trendFilm,
            results: limit
        });
        } catch (error) {
            console.error("Erreur lors du GET film");
            
        }
    };
};

export const tendanceSerie = () => {
    return async (dispatch) => {
        try{
            const resSer = await axios.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=${api_key}`);
            const {results} = resSer.data;
            const limiS = results.slice(0, 6);

            dispatch({
                type: trendSerie,
                result: limiS
            });
        } catch (error) {
            console.error("Erreur lors du GET serie");
            
        }
    };
};