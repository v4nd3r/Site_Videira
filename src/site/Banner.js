import React from 'react';

function Banner(props) {
  return (
    <section id="home" className="video-hero js-fullheight" data-section="home">
        <div className="overlay js-fullheight"></div>
            <div className="container">
                <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true">
                <div className="col-md-10 ftco-animate text-center" data-scrollax=" properties: { translateY: '70%' }">
                    <h1 className="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Igreja Videira Vitória teste</h1>
                    <p data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><a href="#divQuemSomos" className="btn btn-primary btn-outline-white px-4 py-3">Saiba Mais</a></p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Banner;