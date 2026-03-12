import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Link to="/">
                <img className='logo-footer' src="../src/assets/logoMio-Photoroom.png" alt="" />
              </Link>
            </div>
            <div className="col-6 mt-4">
              <div className="contacts">
                <ul className='mt-3'>
                  <span className='fs-2'>I miei contatti</span>
                  <li><i className="fa-solid fa-at"></i> fabioferrari.ff00@gmail.com</li>
                  <li><i className="fa-solid fa-phone"></i> +39 3400802727</li>
                  <li><a className='me-4' href="https://www.linkedin.com/in/fabio-ferrari-571443254/" target="_blank">
                    <i className="fa-brands fa-linkedin"></i> Linkedin
                  </a></li>
                  <li><a href="https://github.com/fabioferrari00" target="_blank">
                    <i className="fa-brands fa-github"></i> Github
                  </a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
