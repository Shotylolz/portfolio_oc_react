import React, {useEffect, useState} from 'react';
import ModelComponentEvolution from "../../ComponentForAll/modelComponentEvolution";
import Image from '../../../Assets/Pictures/testMonteur.jpg'

function DebutantMonteur () {
    const classNameCadre = "content_cadre_one_description";
    const title = "Monteur Amateur";
    const imageAlt = "Ecran d'ordinateur en plein montage";

    const textForImage = [
        "Passioné pas le triathlon comme vous avez pu l'apercevoir précédemment, j'ai également en parallèle créé ma chaine youtube afin de partager mon quotidien et d'aider les pratiquants à développer leurs connaissances" ,
        "Mais attention, en 2023, il ne suffit pas de poster une vidéo pour pouvoir être vu par le plus grand nombre. Il faut savoir monter des vidéos de qualité, avec des règles bien précises. ",
        "Le montage est un métier à part entière, je n'ai pas la prétention d'égaler un professionnel. Cependant, à mon niveau, aussi modeste soit-il, j'éssai de fournir le travail le plus qualitatif possible"
    ]

    return (
        <>
            <ModelComponentEvolution title={title} image_src={Image} image_alt={imageAlt} text={textForImage}/>
        </>
            
    )  
}

export default DebutantMonteur;