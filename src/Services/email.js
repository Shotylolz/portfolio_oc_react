import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../Assets/Style/emailJs.css';

function ContactUs () {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4eo20jb', 'template_iw7dasd', form.current, 'Yswze_Ehm9FfoQfe_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='form_contact_me_emailJs'>
      <label>Nom</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" id="message_form"/>
      <input type="submit" value="Envoyer" className='button_send'/>
    </form>
  );
};

export default ContactUs;