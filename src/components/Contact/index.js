import React, { useRef } from 'react';
import Loader from 'react-loaders';
import { AnimatedLetters } from '../AnimatedLetters';
import emailjs from '@emailjs/browser';

import './index.scss';
import { Map } from '../Map';


export const Contact = () => {

  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_1knaecz',
        'template_nomppsa',
        e.target,
        'cGF7zs2lEGl4vs9Za'
      )
      .then(
        () => {
          alert('Mensaje enviando exitosamente!')
          window.location.reload(false)
        },
        () => {
          alert(
            'Fallo al intentar enviar el mensaje, por favot intente de nuevo.'
          )
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', 'a', 'm', 'e']}
            />
          </h1>
          <p>
            Estoy interesado en ingresar en una gran empresa de desarrollo donde
            haya la oportunidad de aprendizaje y crecimeinto profesional, como
            Ingeniero de Sistemas estoy preparado para afrontar retos TI, además
            de ser apoyo a cualquier grupo de trabajo en donde me encuentre!.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Correo"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Asunto"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Mensaje"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="Enviar" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Leandro Cristiano,
          <br />
          Colombia,
          <br />
          Duitama - Boyacá <br />
          <span>cristiano.g1889@gmail.com</span>
          <span>leandro.cristiano01@gmail.com</span>
        </div>
        {/* <Map/> */}
        
      </div>
      <Loader type="pacman" />
    </>
  )
}
