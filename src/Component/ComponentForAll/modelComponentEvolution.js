import '../../Assets/Style/modelComponentEvolution.css';

function ModelComponentEvolution(props) {
    const textForDescription = props.text.map((text) =>
        <p>{text}</p>
    );

    return(
        <div className='contentAllComponentEvolution'>
            <div className="content_image_cadre_one">
                <img src={props.image_src} alt={props.image_alt}></img>
            </div>
            <div className="content_cadre_two_description">
                <div className="cadre_two_description_title">
                    <h2>{props.title}</h2>
                </div>
                <div className="content_cadre_two_description_text">
                    <p>{textForDescription}</p>
                </div>
            </div>
        </div>
    )
}

export default ModelComponentEvolution;