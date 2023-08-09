import { useEffect, useState } from "react";
import ModelComponentEvolution from "../../ComponentForAll/modelComponentEvolution";
import Image from '../../../Assets/Pictures/testCodeur.jpg'

function FuturCodeur () {
    const classNameCadre = "content_cadre_one_description";
    const title = "Codeur d'aujourd'hui";
    const imageAlt = "Moi en session de codage";

    const textForImage = [
        "Pour cette partie, ok, on peut dire que je ne suis pas très objectif" ,
        "Vous êtes je pense à la recherche d'un développeur si vous êtes sur ce portfolio. En tout cas, la probabilité est grande",
        "J'ai découvert le code et la passion est arrivée instanément. Je me suis donc formé seul, pour développer cette compétence. Ensuite, j'ai eu l'ocassion de commmencer la formation officielle sur OpenClassrooms afin de valider mes acquis.",
        "Aujourd'hui, je me présente face à vous, pour rejoindre votre équipe."
    ]

    return (
        <>
        <ModelComponentEvolution title={title} image_src={Image} image_alt={imageAlt} text={textForImage}/>
         </>
    )  
}

export default FuturCodeur;