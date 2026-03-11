import React from 'react'

const Home = () => {
  return (
    <>
      <div className="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <img className='logo-jumbo' src="../src/assets/logoMio-Photoroom.png" alt="" />
              <h1 className="jumbo-title">Fabio Ferrari - Web Developer</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img className='mia-foto my-5' src="../src/assets/miafoto.png" alt="" />
          </div>
          <div className="col-6 mini-bio d-flex">
            Mi chiamo Fabio, sono nato a Napoli il 06 gennaio 2000. Sono una persona motivata, con buone capacità di adattamento e di lavoro in team, e il mio obiettivo è crescere professionalmente acquisendo esperienza concreta nel settore dello sviluppo web. Durante i miei percorsi ho acquisito tutte le competenze di base per l'inizio di questa carriera.
          </div>
        </div>
        <div className="col-12 text-center mt-4"><h2 className='working-with'>CON COSA LAVORO</h2></div>
        <div className="row d-flex">
          <div className="col-6 mini-bio mt-4">
            Nei miei progetti utilizzo tecnologie come HTML, CSS, JavaScript, React, Node.js e MySQL perché mi permettono di creare applicazioni web moderne, dinamiche e scalabili, garantendo un’esperienza utente fluida e un codice ben strutturato e manutenibile. Amo combinare queste tecnologie per costruire interfacce interattive, gestire dati in modo efficiente e sperimentare soluzioni creative e funzionali.
          </div>
          <div className="col-6 d-flex justify-content-center mt-4">
            <img
              className="img-fluid rounded"
              src="../src/assets/fotolinguaggi.jpg.webp"
              alt="Foto linguaggi"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
