import React from "react";
import { Bar } from 'react-chartjs-2'; // Importer le graphique
import Results from "./result";

function SortieTwo({ data }) {

    return (
        <>
           <div className="custom-width1">
            <Results data={data} /> 
            </div>
        </>
    );
}

export default SortieTwo;