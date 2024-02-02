import React, { useContext, useRef, useState } from 'react'
import useIntersectionObserver from '../../customHook/useInterSectionObserver';
import { ActiveContext } from '../../Container';
import './contact.css';
import { Button } from '../../components/buttons/Btn';
import emailjs from 'emailjs-com';
import { RingLoader } from 'react-spinners';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_msk9dxy', 'template_g3cbj9k', form.current, 'kOnBGFKi2qkd4RYgZ')
      .then(() => {
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="name"
          name="user_name"
          required
          placeholder='Name'
        />
      </div>

      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          id="email"
          name="user_email"
          required
          placeholder='Email'
        />
      </div>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="subject"
          name="user_subject"
          required
          placeholder='Subject'
        />
      </div>

      <div className="mb-3">
        <textarea
          className="form-control"
          id="message"
          name="message"
          rows="4"
          required
          placeholder='Message'
        ></textarea>
      </div>
      <Button type='submit' className='btn w-100 rounded'>Send Message</Button>
    </form>
  );
};

export default function Contact({id}) {
  const [loading, setLoading] = useState(true);

  const {activeItem, setActiveItem} = useContext(ActiveContext);
  const targetRef = useIntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setActiveItem(id);
        setLoading(false)
      }
    });
  }, { threshold: 0.5 });

  const contactInfo = [
    {
      icon: "fas fa-phone",
      info: "09-977619881",
      link: "tel:09977619881",
    },
    {
      icon: "fas fa-envelope",
      info: "herryjacker4@gmail.com",
      link: "mailto:herryjacker4@gmail.com",
    },
    {
      icon: "fa-brands fa-facebook-messenger",
      info: "messenger",
      link: "https://m.me/harry.jacker.581",
    },
    {
      icon: "fas fa-location",
      info: "Mandalay",
      link: "https://maps.app.goo.gl/78r27LnrkzBuGHECA",
    }
  ]

  return (
    <>
    <RingLoader color={'var(--third)'} className='position-fixed top-50 start-50 translate-middle' loading={loading} size={80} />
    <div ref={targetRef} className='contact-section'>
      <div className='container'>
        <div>
          <h2 className='fw-bold colorP'>Contact Me <span className='fs-6'>any time.</span></h2>
          <span>I will get back to you as soon as I can.</span>
          {/* <div class="alert alert-success" role="alert">
            A simple success alert—check it out!
          </div> */}
        </div>
        <div className='row'>
          <div className='col-12 col-md-5 mt-4 contactInfo'>
            <h4 className='mb-3'>Contact Info</h4>
              <div>
                {
                  contactInfo.map( info => (
                    <li>
                      <a href={info.link}>
                        <i className={info.icon + " colorP"}></i> <span> {info.info}</span>
                      </a>
                    </li>
                  ))
                }
              </div>
          </div>
          <div className='col-12 mt-4 col-md-7 contactForm'>
            <h4>Contact Form</h4>
            <ContactForm/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
