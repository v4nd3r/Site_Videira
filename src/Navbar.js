import React from 'react';

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
        <div className="container">
            <a className="navbar-brand" href="index.html">
            <img id="logo-menu" src="Content/images/logo-letra-branca.png" height="60px" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="oi oi-menu"></span> Menu
            </button>

            <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active"><a href="#" className="nav-link">Home</a></li>
                <li className="nav-item"><a href="#divQuemSomos" className="nav-link">Quem somos</a></li>
                <li className="nav-item"><a href="#divOndeEstamos" className="nav-link">Onde estamos</a></li>
                <li className="nav-item"><a href="#divVideiraNews" className="nav-link">Videira News</a></li>
                <li className="nav-item"><a href="#divPalavras" className="nav-link">Palavras</a></li>
                <li className="nav-item"><a href="#divAnuncie" className="nav-link">Anuncie Aqui</a></li>
            </ul>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;