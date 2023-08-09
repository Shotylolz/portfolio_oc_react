import { Link } from 'react-router-dom';
import React, {useState} from 'react';
import '../../Assets/Style/about.css';

function About() {
    return (
        <div className="content_about" id='about'>
            <div className="content_about_left">
                <div className="content_about_left_text">
                    <p>Bonjour</p>
                    <p>Je suis Vincent Quiles</p>
                    <p>développeur full stack</p>
                    <p>J'ai crée ce portfolio afin de répondre à une demande, une demande de main d'oeuvre express</p>
                    <p>Vous pouvez scroller pour avoir un visuel rapide de mes caractéristiques. A savoir que je viens de valider l'équivalent Bac +2 grâce à la formation développeur full stack d'OpenClassrooms </p>
                </div>
            </div>
            <div className="content_about_right">
                <div className="divContentImgMe">
                    <img className="imgMe" alt="moi"></img>
                </div>
            </div>
        </div>
    )
}

export default About;