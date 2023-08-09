import '../../Assets/Style/projectDone.css';
import Image from '../../Assets/Pictures/testCodeur.jpg'
import ModelComponentProjectDone from '../ComponentForAll/componentProjectDone';

function ProjectDone() {
    const imageAlt = "Moi en session de codage";

    const textForImage = [
        "Passioné dans tout ce que j'entreprends, je suis toujours à la recherche de performances" ,
        "Je n'ai jamais céssé de vouloir devenir le meilleur que ce soit au travail comme dans le sport. L'atteinte de résultat est plus grande motivation"
    ]

    return(
        <div className="div_content_general_project_done" id="project">
            <div className="title_content_general_project_done">
                <h2>Projets déjà réalisé</h2>
            </div>
            <div className='content_project_done'>
            <ModelComponentProjectDone  image_src={Image} image_alt={imageAlt} text={textForImage} good_project={"Projet Booki"}/>
            <ModelComponentProjectDone  image_src={Image} image_alt={imageAlt} text={textForImage} good_project={"Projet WeKasa"}/>
            <ModelComponentProjectDone  image_src={Image} image_alt={imageAlt} text={textForImage} good_project={"Projet Mon vieux grimoire"}/>
            </div>
        </div>
    )
}

export default ProjectDone;