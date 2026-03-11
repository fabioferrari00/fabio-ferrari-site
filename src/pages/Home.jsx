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
            Mi chiamo Fabio, sono nato a Napoli il 06 gennaio 2000. Sono una persona motivata, con buone capacità di adattamento e di lavoro in team, e il mio obiettivo è crescere professionalmente acquisendo esperienza concreta nel settore dello sviluppo web. Durante i miei percorsi ho acquisito competenze in HTML, CSS, JavaScript, TypeScript, React, Node.js e MySQL.
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
