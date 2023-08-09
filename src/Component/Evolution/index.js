import {Link} from  'react-router-dom';
import React, {useEffect, useState} from 'react';
import '../../Assets/Style/evolutionMainPage.css';
import SportifDetermined from './Sport';
import DebutantMonteur from './Montage';
import FuturCodeur from './Codage';

function EvolutionMainPage() {

    
    /*
    * use state for add classNameSelected
    */
    const [nav_selected, update_nav_selected] = useState("determined_sportif");

    const change_class_nav_selected = (nameChanged) => {
        update_nav_selected(nameChanged)
    }


    return (
        <div className='evolution_main_page' id="quality">
            <div className='title_evolution_main_page'>
                <h2>Une facilité d'apprentissage accompagné d'une curiosité intéressante</h2>
            </div>
            <div className='div_nav_evolution_main_page'>
                <nav className='nav_evolution_main_page'>
                    <ul className='ul_evolution_main_page'>
                        <li onClick={() => change_class_nav_selected("determined_sportif")} className={nav_selected === "determined_sportif" ? "choice_nav selected" : "choice_nav"}>Sportif determiné</li>
                        <li onClick={() => change_class_nav_selected("debutant_monteur")} className={nav_selected === "debutant_monteur" ? "choice_nav selected" : "choice_nav"}>Monteur amateur</li>
                        <li onClick={() => change_class_nav_selected("futur_codeur")} className={nav_selected === "futur_codeur" ? "choice_nav selected" : "choice_nav"}>Codeur d'aujourd'hui</li>
                    </ul>
                </nav>
            </div>
            <div className='div_content_choice_what_i_do'>
                {nav_selected === "determined_sportif" ? <SportifDetermined /> : ""}
                {nav_selected === "debutant_monteur" ? <DebutantMonteur /> : ""}
                {nav_selected === "futur_codeur" ? <FuturCodeur /> : ""}
            </div>
        </div>
    )
}

export default EvolutionMainPage;

