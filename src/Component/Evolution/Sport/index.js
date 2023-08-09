import React, {useEffect, useState} from 'react';
import ModelComponentEvolution from '../../ComponentForAll/modelComponentEvolution';
import Image from '../../../Assets/Pictures/testOC.jpg'

function SportifDetermined () {
    const classNameCadre = "content_cadre_one_description";
    const title = "Sportif déterminé";
    const imageAlt = "Moi en session de sport";

    const textForImage = [
        "Passionné dans tout ce que j'entreprends, je suis toujours à la recherche de performances" ,
        "Je n'ai jamais céssé de vouloir devenir le meilleur que ce soit au travail comme dans le sport. L'atteinte de résultat est plus grande motivation",
        "Je pratique le triathlon à haute intensité. Ce sport m'a permis d'acquérir discipline, refléxion et patience. En effet, afin de développer au maximum son endurance, la seule combinaison de ces 3 élément permet d'acquérir un niveau supérieur à la moyenne"
    ]

    return (
            <>
            <ModelComponentEvolution title={title} image_src={Image} image_alt={imageAlt} text={textForImage} />
            </>
            
    )       
}

export default SportifDetermined;