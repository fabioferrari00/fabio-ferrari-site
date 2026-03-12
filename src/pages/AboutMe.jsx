import React from 'react'
import Jumbotron from '../components/Jumbotron'

const AboutMe = () => {
  return (
    <>
      <Jumbotron />
      <div className="container">
        <div className="row">
          <h2 className='working-with color-orange text-center my-4'>QUALCOSA SU DI ME</h2>
          <div className="col-12 bio">
            <p>Dopo aver conseguito il diploma in elettrotecnica nel 2018, ho iniziato fin da subito il mio percorso nel mondo del lavoro, sviluppando nel tempo senso di responsabilità, capacità di adattamento e attitudine al lavoro in team. L’esperienza lavorativa mi ha permesso di maturare un approccio pratico alla risoluzione dei problemi e di comprendere l’importanza della collaborazione per raggiungere gli obiettivi. <br />
              <br />

              Spinto dalla passione per la tecnologia e dal desiderio di intraprendere un percorso nel settore digitale, ho deciso di approfondire il mondo dello sviluppo web frequentando un Master in Full Stack Web Development presso Boolean. Durante questo percorso ho acquisito competenze nello sviluppo di applicazioni web utilizzando tecnologie come HTML, CSS, JavaScript, TypeScript, React, Node.js e MySQL, lavorando su diversi progetti pratici sia individuali che di gruppo.
              <br />
              <br />
              Oggi sono uno Junior Front End Developer motivato, con una forte voglia di crescere professionalmente e di fare esperienza nel settore. Mi piace collaborare con gli altri, affrontare nuove sfide e migliorare costantemente le mie competenze, con l’obiettivo di contribuire allo sviluppo di progetti web moderni, funzionali e orientati all’utente.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMe
