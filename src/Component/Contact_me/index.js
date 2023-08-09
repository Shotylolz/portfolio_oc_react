import '../../Assets/Style/contactMe.css';
import ContactUs from '../../Services/email';

function ContactMe () {
    return(
        <div className="div_content_general_contact_me" id='contact_me'>
            <div className="title_content_general_contact_me">
                <h2>Contactez moi</h2>
            </div>
            <div className="form_content_contact_me">
                <ContactUs />
            </div>
        </div>
    )
}

export default ContactMe;