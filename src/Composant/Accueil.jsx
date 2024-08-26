import React, { useEffect } from "react";
import './Css/accueil.css'
import { useDispatch, useSelector } from "react-redux";
import { tendanceFilm, tendanceSerie } from "./Redux/action";


function Accueil(){
    const dispatch = useDispatch();

    const trendFilm = useSelector((state) => state.film.result);
    const trendSerie = useSelector((state) => state.serie.resultat)

    useEffect(() => {
        dispatch(tendanceFilm());
        dispatch(tendanceSerie());
    }, [dispatch]);

    return(
        <>
        
        <div className="tendance">
        <h1>
            Tendance
        </h1>
        <div className="card-tendance">
            <div className="cardF">
                <h2>
                    Films
                </h2>
                <div className="flfilm">
                   {trendFilm.map((film)=>(
                    // ici mettre un <a> avant la div
                    <div key={film.id}>
                  <img src={`https://image.tmdb.org/t/p/w200${film.poster_path}`} alt="Image film"/>
                    <h6>{film.title}</h6>
                  </div>
                ))}
                </div>
            </div>
            <div className="cardS">
                <h2>
                    Series
                </h2>
                <div className="flserie">
                   {trendSerie.map((serie)=>(
                    // ici mettre un <a> avant la div
                    <div key={serie.id}>
                  <img src={`https://image.tmdb.org/t/p/w200${serie.poster_path}`} alt="Image serie"/>
                    <h6>{serie.name}</h6>
                  </div>
                ))}
                </div>
                
            </div>
        </div>
        </div>
        
        </>
    )
}

export default Accueil