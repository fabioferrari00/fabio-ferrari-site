import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <Link className="logo-link" to="/">
              <img src="../src/assets/logoMio-Photoroom.png" alt="ciao" className='header-logo' />
              <span className="logo-title">Fabio Ferrari - Web Developer</span>
            </Link>
          </div>
          <div className="col-6">
            <div className="nav-menu">
              <Link className="me-5" to='/about-me'>Chi sono</Link>
              <Link className="me-5" to='/portfolio'>Portfolio</Link>
              <Link to='/contacts'>Contatti</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
