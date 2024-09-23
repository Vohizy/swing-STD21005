import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import '../App.css';

function Enter({ setGraphData }) {
    const [checkedItems, setCheckedItems] = useState({
        agregrat: false,
        tresorerie: false,
        immobilisation: false,
        obligations: false,
    });

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setCheckedItems({ ...checkedItems, [name]: checked });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Empêche le rechargement de la page

        // Créer les données pour le graphique
        const graphData = [
            { name: 'Agregrat', value: checkedItems.agregrat ? 1 : 0 },
            { name: 'Tresorerie', value: checkedItems.tresorerie ? 1 : 0 },
            { name: 'Immobilisation', value: checkedItems.immobilisation ? 1 : 0 },
            { name: 'Obligations', value: checkedItems.obligations ? 1 : 0 },
        ];

        setGraphData(graphData); // Met à jour l'état dans le parent
    };

    return (
        <>
            <div className="custom-class">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="currency" className="sr-only">Patrimoine</label>
                        <select id="currency" name="Patrimoine">
                            <option>Cresus</option>
                            <option>Beba</option>
                            <option>Koto</option>
                        </select>
                    </div>
                    <div>
                        <Form className="layout-flex-row">
                            {['checkbox'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3 layout-flex-row">
                                    <Form.Check
                                        inline
                                        label="Agregrat"
                                        name="agregrat"
                                        type={type}
                                        checked={checkedItems.agregrat}
                                        onChange={handleCheckboxChange}
                                    />
                                    <Form.Check
                                        inline
                                        label="Tresorerie"
                                        name="tresorerie"
                                        type={type}
                                        checked={checkedItems.tresorerie}
                                        onChange={handleCheckboxChange}
                                    />
                                    <Form.Check
                                        inline
                                        label="Immobilisation"
                                        name="immobilisation"
                                        type={type}
                                        checked={checkedItems.immobilisation}
                                        onChange={handleCheckboxChange}
                                    />
                                    <Form.Check
                                        inline
                                        label="Obligations"
                                        name="obligations"
                                        type={type}
                                        checked={checkedItems.obligations}
                                        onChange={handleCheckboxChange}
                                    />
                                </div>
                            ))}
                        </Form>
                    </div>
                    <div className="layout-flex-row">
                        <div className="custom-width">
                            <label htmlFor="De">De</label>
                            <input type="date" id="De" />
                        </div>
                        <div className="custom-width">
                            <label htmlFor="A">A</label>
                            <input type="date" id="A" />
                        </div>
                    </div>
                    <button type="submit">Voir le résultat</button>
                </form>
            </div>
        </>
    );
}

export default Enter;