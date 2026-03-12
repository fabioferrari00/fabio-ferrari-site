import React from 'react'
import Jumbotron from '../components/Jumbotron'

const Home = () => {
  return (
    <>
      <Jumbotron />
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img className='mia-foto my-5' src="../src/assets/miafoto.png" alt="" />
          </div>
          <div className="col-6 mini-bio d-flex">
            Mi chiamo Fabio, sono nato a Napoli il 06 gennaio 2000. Sono una persona motivata, con buone capacità di adattamento e di lavoro in team, e il mio obiettivo è crescere professionalmente acquisendo esperienza concreta nel settore dello sviluppo web. Durante i miei percorsi ho acquisito tutte le competenze di base per l'inizio di questa carriera.
          </div>
        </div>
        <div className="col-12 text-center mt-3"><h2 className='working-with color-orange'>CON COSA LAVORO</h2></div>
        <div className="row d-flex">
          <div className="col-6 mini-bio my-4">
            Nei miei progetti utilizzo tecnologie come HTML, CSS, JavaScript, React, Node.js e MySQL perché mi permettono di creare applicazioni web moderne, dinamiche e scalabili, garantendo un’esperienza utente fluida e un codice ben strutturato e manutenibile. Amo combinare queste tecnologie per costruire interfacce interattive, gestire dati in modo efficiente e sperimentare soluzioni creative e funzionali.
          </div>
          <div className="col-6 d-flex justify-content-center my-4">
            <img
              className="img-fluid rounded"
              src="../src/assets/fotolinguaggi.jpg.webp"
              alt="Foto linguaggi"
            />
          </div>
        </div>
      </div>
      <div className="bg-orange socials">
        <div className="container py-4">
          <div className="row">
            <h2 className="col-12 text-center title">
              VISITA I MIEI PROFILI
            </h2>
          </div>
          <div className="row ">
            <div className="col-6 d-flex justify-content-center"><a className='me-4' href="https://www.linkedin.com/in/fabio-ferrari-571443254/" target="_blank">
              <i className="fa-brands fa-linkedin"></i> Linkedin
            </a></div>
            <div className="col-6 d-flex justify-content-center"><a href="https://github.com/fabioferrari00" target="_blank">
              <i className="fa-brands fa-github"></i> Github
            </a></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
