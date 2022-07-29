import "./Navbar.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars} from "@fortawesome/free-solid-svg-icons"

export default function Navbar() {
  return (
    <header>
        <section className="navigation">
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <div className="logo navbar-brand">
                        <a href="/"> Hotel </a>
                    </div>                       
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                        <span className="navbar-toggler-icon">
                                <FontAwesomeIcon icon={faBars} />
                        </span>
                    </button>
                        <div className="collapse navbar-collapse" id="navmenu">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item register"><a href="/register" className="nav-link">Register</a></li>
                                <li className="nav-item login"><a href="/login" className="nav-link ">Login</a></li>
                            </ul>
                        </div>
                </div>
            </nav>
        </section>
    </header>
  )
}
