import { useState } from 'react';
import '../../Assets/Style/componentForAll.css';
import projetDone from "../../files/ProjectDone/projectDone.json";


function ModelComponentProjectDone(props) {
    let projectSelected = projetDone.find((project) => project.title === props.good_project);

    const [modalOpen, ModalIsOpen] = useState(false);

    const displayModal = () => {
        ModalIsOpen(modalOpen === false ? true : false);
    }

    const modale = 
    <div className='good_project_modal'>
            <aside className='modal_content'>
                <div className='div_content_button'>
                    <button type="button" onClick={() => displayModal()} >Fermer</button>
                </div>
                <div className='div_content_pict_principal_and_text_project'>
                    <div className='content_pict_principal'>
                        <img src={projectSelected.cover} alt="projet selectionné"></img>

                    </div>
                    <div className='content_text_project'>
                        <div className='content_title_project'>
                            <h3>{projectSelected.title}</h3>
                        </div>
                        <div className='content_year_project'>
                            <p><span className='grasInfoModal'>Année :</span> {projectSelected.year}</p>
                        </div>
                        <div className='content_description_mission'>
                            <p className='grasInfoModal'>Mission :</p>
                            <p>{projectSelected.description}</p>
                        </div>
                        <div className='content_competence'>
                            <p className='grasInfoModal'>Compétence acquises</p>
                            <div className='content_competence_text'>
                                {projectSelected.competence.map( (competency) => 
                                <p className='competence_text'>{competency}</p>
                            )}
                            </div>
                            
                        </div>
                    </div>

                </div>
                <div className='picture_of_project'>
                    {projectSelected.pictures.map( (picture) => 
                        <div className='content_picture_project'>
                            <img src={picture} className='img_project' alt="projet selectionné"></img>
                        </div>
                    )}
                </div>
            </aside>
        </div>;



    return(
        
        <div>
            {modalOpen === true ? modale : ""}
            <div className="cadre_project_done" onClick={() => displayModal()}>
                <img src={props.image_src} alt={props.image_alt}></img>
            </div>
        </div>
        
    )
}

export default ModelComponentProjectDone;