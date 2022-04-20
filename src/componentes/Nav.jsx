import React from "react"

const Nav = ( props) => {

    return(
        <div Classname="header__nav">
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            <a className="nav-link" href="#">Ofertas</a>
                            <a className="nav-link" href="#">Productos</a>
                            <a className="nav-link disabled">Contacto</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Nav