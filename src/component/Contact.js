
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
/*social account*/
  const [social, setSocial] = useState({
    twitter: 'https://twitter.com/@parwana55966627',
    Instagram: 'https://instagram.com/parwanaa.136',
    linkedin: 'https://linkedin.com/in/parwana-sharifi-99a431254',
  });
  return (
    <div id="contact"className="contact-page">
      <h1>Contact Me</h1>
      <div className="map">  
        <iframe
          title="Google Maps"
          src="https://maps.google.com/maps?q=Mahalle%20Haji%20abbass,%20herat&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
          allowFullScreen>
          </iframe>
      </div>
      <div className="social">
        <a href={social.twitter}>Twitter</a>
        <a href={social.Instagram}>Instagram</a>
        <a href={social.linkedin}>LinkedIn</a>
      </div>
    </div>
  );
};

export default Contact;