import React from 'react';

import logoVideiraBranca from '../Content/images/logo-videira-branca.png';

function Rodape(props) {
  return (
    <footer className="ftco-footer ftco-bg-dark ftco-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md">
             <div className="ftco-footer-widget mb-4">
              <div className="block-23 mb-3">
                <h2 className="ftco-heading-2"><span className="icon icon-map-marker"></span> Endereço</h2>
                <ul>
                  <li><span className="text">Rua Sizenando Pechincha, 85</span></li>
                  <li><span className="text">Morada de Camburi</span></li>
                  <li><span className="text">Vitória - ES</span></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
            	<div className="block-23 mb-3">
                  <h2 className="ftco-heading-2"><span className="icon icon-phone"></span> Contatos</h2>
	              <ul>
                  <li><span className="icon icon-phone"></span><span className="text">(27) 2142-3686</span></li>
                  <li><span className="icon icon-whatsapp"></span><span className="text">(27) 99872-0707</span></li>
	                <li><span className="icon icon-envelope"></span><span className="text">videiravix@gmail.com</span></li>
	              </ul>
	            </div>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="">
                  <img src={logoVideiraBranca} height="60px" />
              </h2>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft">
                  <li className="ftco-animate"><a href="https://www.facebook.com/videiravitoriaes/" target="_blank"><span className="icon-facebook"></span></a></li>
                  <li className="ftco-animate"><a href="https://www.instagram.com/videiravitoriaes/" target="_blank"><span className="icon-instagram"></span></a></li>
                  <li className="ftco-animate"><a href="https://www.youtube.com/videiravix/" target="_blank"><span className="icon-youtube-play"></span></a></li>
                </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>Copyright &copy;2020 Todos os direitos reservados | Desenvolvido com <i className="icon-heart" aria-hidden="true"></i> por Vander N. Gagno e <a href="https://colorlib.com" target="_blank">Colorlib</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Rodape;