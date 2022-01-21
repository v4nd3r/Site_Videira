import React from 'react';

function Banner(props) {
  return (
    <section id="home" className="video-hero js-fullheight" data-section="home">
        <div className="overlay js-fullheight"></div>
            <div className="container">
                <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" style={{height: "100vh"}}>
                <div className="col-md-10 text-center">
                    <h1 className="mb-4">Igreja Videira Vitória</h1>
                    <p><a href="#divQuemSomos" className="btn btn-primary btn-outline-white px-4 py-3">Saiba Mais</a></p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Banner;